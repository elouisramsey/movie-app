import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const movies = [
  {
    id: 1,
    genre: 'Crime',
    title: 'John Wick 3',
    poster: require('../../assets/images/image.png'),
    rating: 5,
    rated: 'R',
    duration: '2h 10m',

  },
  {
    id: 2,
    genre: 'Action',
    title: 'Blade Runner 2049',
    poster: require('../../assets/images/image-2.png'),
    rating: 4,
    rated: 'PG-13',
    duration: '2h 25m'
  },
  {
    id: 3,
    genre: 'Action',
    title: 'Alita: Battle Angel',
    poster: require('../../assets/images/image-3.png'),
    rating: 3,
    rated: 'PG-13',
    duration: '1h 34m'
  },
  {
    id: 4,
    genre: 'Action',
    title: 'Avengers: Infinity War',
    poster: require('../../assets/images/image-4.png'),
    rating: 4,
    rated: 'PG-13',
    duration: '3h 4m'
  },
]

export default function ComingSoon({ navigation }) {
  const renderItem = ({ item }) => {
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
      item.rating >= 5 ? 5 : item.rating
    )

    return (
      <TouchableOpacity style={styles.movieHolder} onPress={() => {
        navigation.navigate('MovieDetails', {
          movie: item
        })
      }}>
        <Image source={item?.poster} style={styles.moviePoster} />
        <View style={styles.movieInfo}>
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
            <Text style={styles.movieText}>{item.genre}</Text>
            <View style={styles.circle} />
            <Text style={styles.movieText}>
              {item.duration} | {item.rated}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (

      <FlatList
        data={movies}
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
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginVertical: 10,
    fontFamily: 'SF_Pro'
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
