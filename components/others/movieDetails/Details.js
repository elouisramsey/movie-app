import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Segment from '../../commons/Segment'
import TextDescription from '../../commons/TextDescription'
import MoreInfo from '../../commons/MoreInfo'
import Cast from '../../commons/Cast'
import Preview from './Preview'

const data = [
  {
    id: 1,
    name: 'Keanu Reeves',
    role: 'John Wick',
    image: require('../../../assets/images/keanu.png')
  },
  {
    id: 2,
    name: 'Halle Berry',
    role: 'sofia',
    image: require('../../../assets/images/berry.png')
  },
  {
    id: 3,
    name: 'Laurence Fishburne',
    role: 'bowery king',
    image: require('../../../assets/images/fishburne.png')
  },
  {
    id: 4,
    name: 'Mark Dacascos',
    role: 'zero',
    image: require('../../../assets/images/mark.png')
  }
]

export default function Details({ navigation, tabIndex, changeView, tabs }) {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Segment tabs={tabs} currentIndex={tabIndex} onChange={changeView} />
      </View>
      <Text style={styles.title}>Synopsis</Text>
      <TextDescription
        text={
          'In this third installment of the adrenaline-fueled action franchise, super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table'
        }
      />
      <MoreInfo
        label={'Cast & Crew'}
        onPress={() => navigation.navigate('CastAndCrew')}
      />
      {data.map((item) => (
        <Cast key={item.id} {...item} />
      ))}
      <Preview navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  tabContainer: {
    marginVertical: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#FFFFFF',
    fontFamily: 'SF_Pro'
  }
})
