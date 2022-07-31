import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import React from 'react'

interface Props {
  navigation: any
  share?: boolean
  children: any
  onPress?: () => void
}

export default function Info({ share, onPress, children, navigation }: Props) {
    const goBack = () => {
        return navigation.goBack()
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name='chevron-back-outline' size={38} color='white' />
      </TouchableOpacity>
      <Text style={styles.header}>{children}</Text>
      {!share && <View />}
      {share && (
        <TouchableOpacity onPress={onPress}>
          <FontAwesome name='share' size={24} color='white' />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: '#2B3543',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  header: {
    fontSize: 18,
    fontFamily: 'SF_Pro',
    color: '#fff',
    fontWeight: 'bold'
  }, 
})
