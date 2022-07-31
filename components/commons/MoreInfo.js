import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MoreInfo({ label, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, { color: '#47CFFF' }]}>View All</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    fontFamily: 'SF_Pro',
    fontSize: 20,
    color: '#FFFFFF'
  }
})
