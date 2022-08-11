import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import {
  Fontisto,
  Ionicons,
  FontAwesome,
  MaterialIcons
} from '@expo/vector-icons'
import { Video, AVPlaybackStatus } from 'expo-av'
import Details from '../components/others/movieDetails/Details'
import Reviews from '../components/others/movieDetails/Reviews'
import Showtimes from '../components/others/movieDetails/Showtimes'

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


export default function MovieDetails({ navigation }) {
  const [tabIndex, setTabIndex] = React.useState(0)
  const changeView = (index) => setTabIndex(index)

  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})

  return (
    <ScrollView bounces={false}>
      {tabIndex === 0 && (
        <>
          <SafeAreaView style={styles.preview}>
            <View style={styles.opt}>
              <TouchableOpacity
                onPress={() =>
                  status.isPlaying ? video.current.pauseAsync() : null
                }
              >
                <Ionicons name='chevron-back-outline' size={38} color='white' />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name='share' size={24} color='white' />
              </TouchableOpacity>
            </View>
            {/* TODO - Add video poster from RN video poster documentation */}
            <Image
              source={require('../assets/images/poster.png')}
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
              source={require('../assets/JW.mp4')}
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
                source={require('../assets/images/image.png')}
                style={styles.moviePoster}
              />
            )}
          </View>

          <SafeAreaView>
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle}>John Wick 3: Parabellum</Text>
              <Text style={styles.movieText}>2hr 10m | R</Text>
              <Text style={styles.movieText}>Action, Crime, Thriller</Text>
              <View style={styles.ratingsHolder}>
                <Text style={styles.movieRating}>5/5</Text>
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
              setTabIndex={setTabIndex}
              tabs={tabs}
            />
          </SafeAreaView>
        </>
      )}
      {tabIndex === 1 && (
        <Reviews
          navigation={navigation}
          changeView={changeView}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          tabs={tabs}
        />
      )}
      {tabIndex === 2 && (
        <Showtimes
          navigation={navigation}
          changeView={changeView}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          tabs={tabs}
        />
      )}
    </ScrollView>
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
