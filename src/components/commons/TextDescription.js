import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TextDescription({ text }) {
  const [showMore, setShowMore] = React.useState(true)
  const [numLines, setNumLines] = React.useState(3.5)
  return (
    <View style={styles.container}>
      <Text numberOfLines={numLines} style={styles.description}>
        {text}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setShowMore(!showMore)
          setNumLines(showMore ? 100 : 3)
        }}
      >
        <Text style={styles.readMore}>
          {showMore ? 'Show more' : 'Show less'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'SF_Pro',
    opacity: 0.7,
    lineHeight: 24
  },
  readMore: {
    fontSize: 14,
    color: '#47CFFF',
    fontFamily: 'SF_Pro',
    fontWeight: 'bold',
    marginLeft: 2
  }
})
