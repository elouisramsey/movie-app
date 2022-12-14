import { Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import Segment from 'src/components/commons/Segment'
import ComingSoon from './ComingSoon'
import { COLORS } from 'src/Styles/styles'

const tabs = [
  {
    name: 'Now showing',
    icon: <Ionicons name='ios-play' size={10} color={COLORS.inactive} />
  },
  {
    name: 'Coming soon'
  }
]

export default function HomeMovies({ navigation }: {
  navigation: any
}) {
  const [tabIndex, setTabIndex] = React.useState(0)
  const changeView = (index: number) => setTabIndex(index)

  return (
    <>
      <Segment tabs={tabs} currentIndex={tabIndex} onChange={changeView} />
      {tabIndex === 0 && <ComingSoon navigation={navigation} />}
      {tabIndex === 1 && <Text>Coming soon</Text>}
    </>
  )
}
