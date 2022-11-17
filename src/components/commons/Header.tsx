import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from 'src/Styles/styles'

interface Props {
  title: string
  link?: any
  onPress?: () => void
}

const Header: React.FC<Props> = ({ title, link, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {link && <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>{link}</Text>
        </TouchableOpacity>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: COLORS.grayed,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 35
  },
  title: {
    fontSize: 18,
    fontFamily: 'SF_Pro',
    color: '#fff',
    fontWeight: 'bold'
  },
  link: {
    fontSize: 16,
    fontFamily: 'SF_Pro',
    color: '#E51937'
  }
})

export { Header }
