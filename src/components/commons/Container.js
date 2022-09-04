import { ScrollView } from 'react-native'
import React from 'react'

function Container({ children }) {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {children}
    </ScrollView>
  )
}

export { Container }
