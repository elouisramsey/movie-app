import { StyleSheet, Text } from 'react-native'
import React from 'react'
import moment from 'moment'

type Props = {
  date: any
  textStyle?: object
  withoutTime?: boolean
}

const Dateformatter = ({ date, textStyle, withoutTime }: Props) => {
  return (
    <>
      {!withoutTime && (
        <Text style={[styles.date, textStyle]}>
          {moment(date).format('ddd Do MMMM, YYYY | hh:mm:ssa')}
        </Text>
      )}
      {withoutTime && (
        <Text style={[styles.date, textStyle]}>
          {moment(date).format('DD-MM-YY')}
        </Text>
      )}
    </>
  )
}

export default Dateformatter

const styles = StyleSheet.create({
  date: {
    fontSize: 13,
    color: '#7C7C7C',
    lineHeight: 16,
    fontWeight: '400',
    fontFamily: 'SF_Pro'
  }
})
