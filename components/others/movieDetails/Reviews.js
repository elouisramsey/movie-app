import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { Container } from '../../commons/Container'
import Info from '../../commons/Info'
import Segment from '../../commons/Segment'

const data = [
  {
    id: 1,
    name: 'Devin Hopkins',
    image: require('../../../assets/images/27.png'),
    comment:
      'John Wick Chapter 3 offers great action and a more in-depth at his World in comparison to the first two entries.'
  },
  {
    id: 2,
    name: 'Essie Gonzalez',
    image: require('../../../assets/images/28.png'),
    comment:
      'Great movie, lots of action, extremely gory, and in some scenes even funny!'
  },
  {
    id: 3,
    name: 'Sheryl Ellis',
    image: require('../../../assets/images/29.png'),
    comment:
      'I could some of the punches being thrown getting faked but outside of that and great acton movie.'
  }
]

export default function Reviews({ navigation, tabIndex, changeView, tabs }) {
  return (
    <SafeAreaView>
      <Info navigation={navigation} share>
        {'John Wick 3: Parabellum'}
      </Info>
      <View>
        <Segment tabs={tabs} currentIndex={tabIndex} onChange={changeView} />
      </View>
      <ScrollView>
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>4.6/5</Text>
            <View style={styles.ratings}>
              <MaterialIcons name='star' size={30} color='#ffc045' />
              <MaterialIcons name='star' size={30} color='#ffc045' />
              <MaterialIcons name='star' size={30} color='#ffc045' />
              <MaterialIcons name='star' size={30} color='#ffc045' />
              <MaterialIcons name='star' size={30} color='#ffc045' />
            </View>
          </View>
          <Text style={styles.numberofRatings}>38 Reviews</Text>
        </View>
        {data?.map((item) => (
          <View style={styles.commentHolder} key={item.id}>
            <View style={styles.commentContainer}>
              <View style={styles.ratings}>
                <MaterialIcons name='star' size={20} color='#ffc045' />
                <MaterialIcons name='star' size={20} color='#ffc045' />
                <MaterialIcons name='star' size={20} color='#ffc045' />
                <MaterialIcons name='star' size={20} color='#ffc045' />
                <MaterialIcons name='star' size={20} color='#ffc045' />
              </View>
              <Text style={styles.comment}>{item.comment}</Text>
            </View>
            <View style={styles.arrow}>
              <MaterialIcons name='arrow-drop-down' size={80} color='#2B3543' />
            </View>
            <View style={styles.commenter}>
              <View style={styles.imgHolder}>
                <Image source={item.image} />
              </View>
              <View style={styles.commenterInfo}>
                <Text style={styles.commenterName}>{item.name}</Text>
                <Text style={styles.commenterDate}>May 20, 2019</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  ratingContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%'
  },
  ratingText: {
    fontFamily: 'SF_Pro',
    fontSize: 30,
    color: '#fff',
    marginRight: 10
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  numberofRatings: {
    color: '#fff',
    fontFamily: 'SF_Pro',
    fontSize: 22,
    opacity: 0.5
  },
  commentHolder: {
    marginHorizontal: 15,
    marginVertical: 15
  },
  commentContainer: {
    width: '100%',
    backgroundColor: '#2b3543',
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 15,
    position: 'relative',
    zIndex: 1
  },
  comment: {
    color: '#fff',
    fontFamily: 'SF_Pro',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 15
  },
  arrow: {
    marginTop: -35,
  },
  commenter: {
    flexDirection: 'row',
    marginTop: -15,
    marginLeft: 25
  },
  imgHolder: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  commenterInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  commenterName: {
    fontFamily: 'SF_Pro',
    fontSize: 14,
    color: '#fff',
    marginBottom: 5
  },
  commenterDate: {
    fontFamily: 'SF_Pro',
    fontSize: 12,
    color: '#fff',
    opacity: 0.5
  }
})
