import { View, Text, Animated, Platform, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'

export interface Props {
  opacity: number
  date: Date
  onChange: () => void
}

const Calendar: React.FC<Props> = ({ opacity, date, onChange }) => {
  return (
    <Animated.View style={{ opacity }}>
      <DateTimePicker
        value={date}
        mode={'date'}
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
        is24Hour={true}
        onChange={onChange}
        style={styles.datePicker}
        textColor={'#fff'}
        themeVariant={'dark'}
      />
    </Animated.View>
  )
}

export default Calendar

const styles = StyleSheet.create({
  datePicker: {
    // height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: '#fff',
    width: '100%'
  }
})
