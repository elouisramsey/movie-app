import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  title: string
  onPress: () => void
  backgroundColor?: string
  color?: string
  width?: string
}

const Button = (props: Props) => {
  const { title, onPress, backgroundColor, color, width } = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, backgroundColor, width }}
    >
      <Text style={{ ...styles.text, color }}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 15
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'SF_Pro',
    fontWeight: 'bold',
  }
})

export default Button

Button.defaultProps = {
  backgroundColor: '#E51937',
  color: '#fff',
  width: '100%',
  title: 'Get ticket'
}