import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Cast({ profile_path, name, job }) {
  const baseImgUrl = 'https://image.tmdb.org/t/p'
  const size = 'w200'
  return (
    <View style={styles.container}>
      <View style={styles.imgHolder}>
        <Image
          source={{
            uri: `${baseImgUrl}/${size}${profile_path}`
          }}
          objectFit='cover'
          style={styles.imgHolder}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <MaterialCommunityIcons name='dots-horizontal' size={28} color='grey' />
      {/* <Text style={styles.role}>{job}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15
  },
  imgHolder: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  name: {
    fontFamily: 'SF_Pro',
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500'
  },
  role: {
    fontFamily: 'SF_Pro',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.5,
    textTransform: 'uppercase'
  }
})
