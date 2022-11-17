import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import 'react-native-gesture-handler'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import Toast from 'react-native-toast-message'

import Tabs from './navigation/tabs'
import { store, persistor } from './store/store'
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'
import { COLORS } from 'src/Styles/styles'

Amplify.configure(awsconfig)

const getFont = () =>
  Font.loadAsync({
    SF_Pro: require('./assets/fonts/SF-Pro-Text-Regular.otf')
  })

function App() {
  const [fontsLoaded, setFontLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <NavigationContainer>
              <Tabs />
              <StatusBar style='light' />
            </NavigationContainer>
            <Toast />
          </SafeAreaView>
        </PersistGate>
      </Provider>
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

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary
  }
})
