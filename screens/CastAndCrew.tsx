import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Info from '../components/commons/Info'
import { SafeAreaView } from 'react-native-safe-area-context'
import Cast from '../components/commons/Cast'

const data = [
  {
    id: 1,
    name: 'Keanu Reeves',
    role: 'John Wick',
    image: require('../assets/images/keanu.png')
  },
  {
    id: 2,
    name: 'Halle Berry',
    role: 'sofia',
    image: require('../assets/images/berry.png')
  },
  {
    id: 3,
    name: 'Laurence Fishburne',
    role: 'bowery king',
    image: require('../assets/images/fishburne.png')
  },
  {
    id: 4,
    name: 'Mark Dacascos',
    role: 'zero',
    image: require('../assets/images/mark.png')
  },
  {
    id: 5,
    name: 'Asia Kate Dillon',
    role: 'Adjudicator',
    image: require('../assets/images/14.png')
  },
  {
    id: 6,
    name: 'Lance Reddick',
    role: 'charon',
    image: require('../assets/images/13.png')
  },
  {
    id: 7,
    name: 'Anjelica Huston',
    role: 'Director',
    image: require('../assets/images/12.png')
  },
  {
    id: 8,
    name: 'Margaret Daly',
    role: 'operator',
    image: require('../assets/images/16.png')
  },
  {
    id: 9,
    name: 'Jerome Flynn',
    role: 'berrada',
    image: require('../assets/images/15.png')
  }
]

export default function CastAndCrew({
  navigation,
  route
}: {
  navigation: any
  route: any
}) {
  const { actors } = route.params
  const candc = [...actors.cast, ...actors.crew]
  const filtercandc = [
    ...new Map(candc.map((item) => [item.id, item])).values()
  ]
  return (
    <SafeAreaView>
      <Info navigation={navigation}>{'Cast & Crew'}</Info>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        {filtercandc.map((item) => (
          <Cast key={item.id} {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
