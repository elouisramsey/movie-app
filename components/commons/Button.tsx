import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import React from 'react'

interface Props {
  title: string
  onPress: () => void
  backgroundColor?: string
  color?: string
  width?: string
  disabled?: boolean
  loading?: boolean
}

const Button = (props: Props) => {
  const {
    title,
    onPress,
    backgroundColor,
    color,
    width = '100%',
    disabled,
    loading
  } = props

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: disabled ? 'grey' : backgroundColor,
        width
      }}
    >
      {loading && <ActivityIndicator size='small' color='#fff' />}
      <Text style={{ ...styles.text, marginLeft: loading ? 20 : 0, color }}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 15,
    flexDirection: 'row'
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
