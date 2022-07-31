import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import 'react-native-gesture-handler'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native'
import Tabs from './navigation/tabs'


const getFont = () =>
  Font.loadAsync({
    SF_Pro: require('./assets/fonts/SF-Pro-Text-Regular.otf')
  })

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tabs />
          <StatusBar style='light' />
        </NavigationContainer>
      </SafeAreaProvider>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
