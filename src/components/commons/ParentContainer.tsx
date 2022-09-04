import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Info from './Info'

type Props = {
  children: ReactNode
  requiresHeader?: boolean
  headerChildren: any
  navigation: any
}

const ParentContainer = ({
  children,
  requiresHeader = true,
  headerChildren,
  navigation
}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {requiresHeader && <Info navigation={navigation}>{headerChildren}</Info>}

      {children}
    </SafeAreaView>
  )
}

export default ParentContainer

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})
