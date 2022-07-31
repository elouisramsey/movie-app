import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import Info from '../components/commons/Info'

import { SafeAreaView } from 'react-native-safe-area-context'

const data = [
  {
    id: 1,
    image: require('../assets/images/17.png')
  },
  {
    id: 2,
    image: require('../assets/images/18.png')
  },
  {
    id: 3,
    image: require('../assets/images/21.png')
  }
]

export default function Photos({navigation}) {
  return (
    <ScrollView>
      <SafeAreaView>
        <Info navigation={navigation}>{'Photos'}</Info>
        <View style={{ paddingHorizontal: 15 }}>
          {data.map((item) => (
            <View style={styles.imageContainer} key={item.id}>
              <Image source={item.image} style={styles.image} />
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 226,
    overflow: 'hidden',
    marginVertical: 15
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
