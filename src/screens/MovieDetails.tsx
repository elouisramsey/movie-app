import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import {
  Fontisto,
  Ionicons,
  FontAwesome,
  MaterialIcons
} from '@expo/vector-icons'
import { Video, AVPlaybackStatus } from 'expo-av'

import LoadingIndicator from 'src/components/commons/LoadingIndicator'
import { api, key } from 'store/Features/Movies/movieSlice'
import Details from './movieDetails/Details'
import Reviews from './movieDetails/Reviews'
import Showtimes from './movieDetails/Showtimes'


const tabs = [
  {
    name: 'Details'
  },
  {
    name: 'Reviews'
  },
  {
    name: 'Showtimes'
  }
]

type MovieProps = {
  title: string
  poster_path: string
  id: number
  adult: boolean
  backdrop_path: string
  overview: string
  tagline: string
  vote_average: number
  vote_count: number
  genres: {
    id: number
    name: string
  }[]
}

export default function MovieDetails({
  navigation,
  route
}: {
  navigation: any
  route: any
}) {
  const baseImgUrl = 'https://image.tmdb.org/t/p'
  const size = 'w500'

  const { movie } = route.params

  const [tabIndex, setTabIndex] = React.useState(0)
  const changeView = (index: number) => setTabIndex(index)

  const video = React.useRef<any>(null)
  const [status, setStatus] = React.useState<any>({})
  const [selectedMovie, setSelectedMovie] = React.useState<MovieProps>({
    title: '',
    poster_path: '',
    id: 0,
    adult: false,
    backdrop_path: '',
    overview: '',
    tagline: '',
    vote_average: 0,
    vote_count: 0,
    genres: []
  })
  const [actors, setActors] = React.useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getMovieDetails = async () => {
       setLoading(true)
    api.get(`movie/${movie}?api_key=${key}&language=en-US`).then((res) => {
      setSelectedMovie(res.data)
    })
  }

  const getMovieVideos = async () => {
       setLoading(true)
    api
      .get(`movie/${movie}/videos?api_key=${key}&language=en-US`)
      .then((res) => {
        // console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

  const getCredit = async () => {
       setLoading(true)
    api
      .get(`movie/${movie}/credits?api_key=${key}&language=en-US`)
      .then((res) => {
        setActors(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const t = async () => {
   
      await Promise.all([getMovieDetails(), getMovieVideos(), getCredit()])
        .then(() => {
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    }
    t()
  }, [])

  return (
    <View>
      {tabIndex === 0 && (
        <ScrollView bounces={false}>
          <SafeAreaView style={styles.preview}>
            <View style={styles.opt}>
              <TouchableOpacity
                onPress={() =>
                  status.isPlaying ? video.current.pauseAsync() : null
                }
              >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name='chevron-back-outline'
                    size={38}
                    color='white'
                  />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name='share' size={24} color='white' />
              </TouchableOpacity>
            </View>
            {/* TODO - Add video poster from RN video poster documentation */}
            <Image
              object-fit='cover'
              source={{
                uri: `${baseImgUrl}/${size}${selectedMovie.backdrop_path}`
              }}
              style={[styles.video, { zIndex: 10, resizeMode: 'cover' }]}
            />
            <TouchableOpacity
              onPress={() =>
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
              style={styles.playBtn}
            >
              <View style={styles.btn}>
                <Fontisto name='play' size={16} color='grey' />
              </View>
            </TouchableOpacity>
            <Video
              ref={video}
              style={[styles.video, { zIndex: status.isPlaying ? 14 : 0 }]}
              source={require('assets/JW.mp4')}
              resizeMode='cover'
              volume={1}
              useNativeControls
              //   isLooping
              //   shouldPlay
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          </SafeAreaView>
          <View style={styles.movieDetails}>
            {!status.isPlaying && (
              <Image
                source={{
                  uri: `${baseImgUrl}/${size}${selectedMovie.poster_path}`
                }}
                style={styles.moviePoster}
              />
            )}
          </View>

          <SafeAreaView>
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle}>{selectedMovie.title}</Text>
              <Text style={styles.movieText}>
                1hr 45mins| {selectedMovie.adult === false ? 'PG' : 'PG-18'}
              </Text>
              <Text style={styles.movieText}>
                {selectedMovie.genres.map((genre) => genre.name).join(', ')}
              </Text>
              <View style={styles.ratingsHolder}>
                <Text style={styles.movieRating}>
                  {selectedMovie.vote_average / 3 >= 5
                    ? 4
                    : (selectedMovie.vote_average / 2).toFixed(1)}
                </Text>
                <View style={styles.ratings}>
                  <MaterialIcons name='star' size={38} color='#ffc045' />
                  <MaterialIcons name='star' size={38} color='#ffc045' />
                  <MaterialIcons name='star' size={38} color='#ffc045' />
                  <MaterialIcons name='star' size={38} color='#ffc045' />
                  <MaterialIcons name='star' size={38} color='#ffc045' />
                </View>
              </View>
            </View>
            <Details
              navigation={navigation}
              changeView={changeView}
              tabIndex={tabIndex}
              tabs={tabs}
              synopsis={selectedMovie.overview}
              actors={actors}
            />
          </SafeAreaView>
        </ScrollView>
      )}
      {tabIndex === 1 && (
        <Reviews
          movie={movie}
          navigation={navigation}
          changeView={changeView}
          tabIndex={tabIndex}
          tabs={tabs}
          title={selectedMovie.title}
        />
      )}
      {tabIndex === 2 && (
        <Showtimes
          navigation={navigation}
          changeView={changeView}
          tabIndex={tabIndex}
          title={selectedMovie.title}
          tabs={tabs}
        />
      )}
      <LoadingIndicator loading={loading} />
    </View>
  )
}

const styles = StyleSheet.create({
  preview: {
    width: '100%',
    height: 450
  },
  video: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%'
  },
  opt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    zIndex: 15,
    paddingHorizontal: 15
  },
  playBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    zIndex: 11,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -35,
    marginLeft: -35
  },
  moviePoster: {
    width: 167,
    height: 250,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -195,
    marginLeft: -83
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#FFFFFF'
  },
  movieDetails: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  movieTitle: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '85%',
    marginTop: '25%',
    letterSpacing: 1,
    marginBottom: 16,
    fontFamily: 'SF_Pro'
  },
  movieText: {
    fontSize: 20,
    color: '#FFFFFF',
    opacity: 0.5,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'SF_Pro'
  },
  ratingsHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  movieRating: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 8,
    fontFamily: 'SF_Pro'
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
