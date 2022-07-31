import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Info from '../components/commons/Info'
import { Container } from '../components/commons/Container'

const data = [
  {
    id: 1,
    image: require('../assets/images/19.png'),
    title: 'Female actors we cant wait to see',
    time: '3 hours ago'
  },
  {
    id: 2,
    image: require('../assets/images/20.png'),
    title: 'The best John Wick action scenes',
    time: '2 days ago'
  },
  {
    id: 3,
    image: require('../assets/images/23.png'),
    title: 'The good parts of the new trailer',
    time: '1 week ago'
  }
]

function Blog({ navigation }) {
  return (
    <Container>
      <Info navigation={navigation}>{'Blogs about this film'}</Info>
      <View style={styles.container}>
        {data.map((item) => (
          <TouchableOpacity
            style={styles.itemContainer}
            key={item.id}
            onPress={() => navigation.navigate('BlogDetails')}
          >
            <Image source={item.image} style={item.image} />
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Container>
  )
}

export { Blog }

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  itemContainer: {
    width: '100%',
    marginBottom: 30
  },
  image: {
    height: 170,
    width: '100%'
  },
  title: {
    fontSize: 16,
    fontFamily: 'SF_Pro',
    color: '#fff'
  },
  time: {
    fontSize: 14,
    color: '#fff',
    marginTop: 20,
    marginBottom: 4,
    opacity: 0.5,
    fontFamily: 'SF_Pro'
  }
})
