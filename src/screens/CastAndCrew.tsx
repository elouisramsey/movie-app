import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Cast from 'src/components/commons/Cast'
import Info from 'src/components/commons/Info'

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
