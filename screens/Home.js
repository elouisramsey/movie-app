import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import HomeMovies from '../components/others/HomeMovies'

export default function Home({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#0F1B2B'
      }}
    >
      <View style={styles.child}>
        <Text style={styles.header}>Movie Central</Text>
        <TouchableOpacity>
          <Ionicons name='ios-search-outline' size={24} color='#FFFFFF' />
        </TouchableOpacity>
      </View>
      <HomeMovies navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1B2B',
    flex: 1,
    paddingHorizontal: 15,
    color: '#FFFFFF'
  },
  child: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%'
  },
  header: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'SF_Pro',
    fontWeight: 'bold'
  }
})
