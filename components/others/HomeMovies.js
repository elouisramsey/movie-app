import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Segment from '../commons/Segment'
import ComingSoon from './ComingSoon'

const tabs = [
  {
    name: 'Now showing',
    icon: <Ionicons name='ios-play' size={10} color='#D9251D' />
  },
  {
    name: 'Coming soon'
  }
]

export default function HomeMovies({ navigation }) {
  const [tabIndex, setTabIndex] = React.useState(0)
  const changeView = (index) => setTabIndex(index)

  return (
    <>
      <Segment tabs={tabs} currentIndex={tabIndex} onChange={changeView} />
      {tabIndex === 0 && <ComingSoon navigation={navigation} />}
      {tabIndex === 1 && <Text>Coming soon</Text>}
    </>
  )
}
