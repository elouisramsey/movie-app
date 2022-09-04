import { ScrollView } from 'react-native'
import React from 'react'

type Props = {
  children: any
  horizontal?: boolean
}

const ScrollContainer = ({ children, horizontal }: Props) => {
  return (
    <ScrollView
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 25,
        paddingVertical: 15,
        height: '100%'
      }}
    >
      {children}
    </ScrollView>
  )
}

export default ScrollContainer
