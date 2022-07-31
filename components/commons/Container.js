import { ScrollView } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'

function Container({ children }) {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}> 
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </ScrollView>
  )
}

export { Container }
