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

type Props = {
  navigation: any
  tabIndex: number
  changeView: (index: number) => void
  tabs: any
  synopsis: string
  actors: any
}

export default function Details({
  navigation,
  tabIndex,
  changeView,
  tabs,
  synopsis,
  actors
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Segment tabs={tabs} currentIndex={tabIndex} onChange={changeView} />
      </View>
      <Text style={styles.title}>Synopsis</Text>
      <TextDescription text={synopsis} />
      <MoreInfo
        label={'Cast & Crew'}
        onPress={() => navigation.navigate('CastAndCrew', { actors })}
      />
      {actors?.cast?.slice(0, 4).map((item: any) => (
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
