import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'
import React, { useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useAppDispatch, useAppSelector } from '../../store/Hooks/hooks'
import {
  setMovieName,
  setMoviePoster,
  setTheatre
} from '../../store/Features/Cinema/cinemaSlice'
import { getMovies } from '../../store/Features/Movies/movieSlice'

export default function ComingSoon({ navigation }: { navigation: any }) {
  const dispatch = useAppDispatch()
  const trendingMovies = useAppSelector((state) => state.movies.movies)

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  const renderItem = ({ item }: { item: any }) => {
    const stars = [
      <MaterialIcons name='star-outline' size={16} color='#ffc045' />,
      <MaterialIcons name='star-outline' size={16} color='#ffc045' />,
      <MaterialIcons name='star-outline' size={16} color='#ffc045' />,
      <MaterialIcons name='star-outline' size={16} color='#ffc045' />,
      <MaterialIcons name='star-outline' size={16} color='#ffc045' />
    ]

    stars.fill(
      <MaterialIcons name='star' size={14} color='#ffc045' />,
      0,
      item.vote_average / 3 >= 5 ? 5 : item.vote_average / 2
    )

    const baseImgUrl = 'https://image.tmdb.org/t/p'
    const size = 'w500'

    return (
      <TouchableOpacity
        style={styles.movieHolder}
        onPress={async () => {
          navigation.navigate('MovieDetails', {
            movie: item.id
          })
          dispatch(setMovieName(item.title))
          dispatch(setMoviePoster(`${baseImgUrl}/${size}${item.poster_path}`))
        }}
      >
        <Image
          source={{
            uri: `${baseImgUrl}/${size}${item.poster_path}`
          }}
          style={styles.moviePoster}
        />
        <View>
          <View style={styles.movieRating}>
            {stars.map((star, index) => (
              <Text style={styles.rating} key={index}>
                {star}
              </Text>
            ))}
          </View>
          <Text style={styles.movieTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <View style={styles.minorInfo}>
            <Text
              style={[
                styles.movieText,
                {
                  textTransform: 'capitalize'
                }
              ]}
            >
              {item.media_type}
            </Text>
            <View style={styles.circle} />
            <Text style={styles.movieText}>
              1hr 45mins| {item.adult === false ? 'PG' : 'PG-18'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <FlatList
      data={trendingMovies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      bounces={false}
      numColumns={2}
      // style={{flex: 1, flexGrow: 1}}
    />
  )
}

const styles = StyleSheet.create({
  movieHolder: {
    height: 340,
    flex: 1 / 2
  },
  moviePoster: {
    height: 250,
    marginBottom: 10,
    resizeMode: 'contain'
  },
  movieRating: {
    flexDirection: 'row'
  },
  rating: {
    marginRight: 3
  },
  movieTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginVertical: 3,
    fontFamily: 'SF_Pro',
    lineHeight: 20
  },
  minorInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    opacity: 0.3,
    color: '#fff'
  },
  movieText: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.5,
    fontFamily: 'SF_Pro'
  }
})
