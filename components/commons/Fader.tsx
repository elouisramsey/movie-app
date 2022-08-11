// import { View, Text, Animated, Platform, StyleSheet } from 'react-native'
// import React, { useState } from 'react'
// import DateTimePicker from '@react-native-community/datetimepicker'

// export interface Props {
//   opacity: number
//   onChange: () => void
// }

// const Calendar: React.FC<Props> = ({ opacity, onChange }) => {
//   const [date, setDate] = useState(new Date())
//   console.log(date);
//   return (
//     <Animated.View style={{ opacity }}>
//       <DateTimePicker
//         value={date}
//         mode={'date'}
//         display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//         is24Hour={true}
//         onChange={(val: any) => {
//           setDate(val)
//         }}
//         style={styles.datePicker}
//         textColor={'#fff'}
//         themeVariant={'dark'}
//       />
//     </Animated.View>
//   )
// }

// export default Calendar

// const styles = StyleSheet.create({
//   datePicker: {
//     // height: 260,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     color: '#fff',
//     width: '100%'
//   }
// })

import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Animated
} from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

type DateProps = {
  date: any
  textStyle?: object
  withoutTime?: boolean
}

const Dateformatter = ({ date, textStyle, withoutTime }: DateProps) => {
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

export interface Props {
  //   opacity: number;
  //   date: Date;
  onDateChange: (a: any) => void
  defaultDate: any
  error?: any
  value: string
  label?: string
  labelStyle?: object
  dateStyle?: object
  opacity: number
}

const Datepicker: React.FC<Props> = ({
  defaultDate,
  onDateChange,
  error,
  label,
  labelStyle,
  dateStyle,
  opacity
}) => {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [dateString, setDateString] = useState(
    moment(new Date()).format('MM/DD/y')
  )

  const renderDatepicker = () => {
    return (
      <DateTimePicker
        timeZoneOffsetInMinutes={0}
        value={date}
        mode={'date'}
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
        onChange={Platform.OS === 'ios' ? onChange : onAndroidDateChange}
        textColor={error ? '#EE4B2B' : '#2C2948'}
        themeVariant={'dark'}
        minimumDate={
          new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))
        }
        maximumDate={new Date(moment().format('YYYY-MM-DD'))}
      />
    )
  }

  const onChange = (event: any, selectedDate: any) => {
    setDate(selectedDate)
    setDateString(moment(selectedDate).format('MM/DD/y'))
  }

  const onAndroidDateChange = (event: any, selectedDate: any) => {
    setShow(false)
    if (selectedDate) {
      setDate(selectedDate)
      onDateChange(selectedDate)
    }
  }

  const onCancel = () => {
    setDate(defaultDate)
    setShow(false)
  }

  const onDone = () => {
    onDateChange(date)
    setShow(false)
  }

  return (
    <Animated.View style={{ opacity }}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
        <View>
          <Dateformatter
            withoutTime={true}
            date={date}
            textStyle={[styles.textStyle, dateStyle]}
          />

          {Platform.OS !== 'ios' && show && renderDatepicker()}
          {Platform.OS === 'ios' && (
            <Modal
              transparent={true}
              animationType='slide'
              visible={show}
              supportedOrientations={['portrait']}
              onRequestClose={() => setShow(true)}
            >
              <View style={{ flex: 1 }}>
                <TouchableHighlight
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    flexDirection: 'row'
                  }}
                  activeOpacity={1}
                  //   visible={show}
                  onPress={() => setShow(false)}
                >
                  <TouchableHighlight
                    underlayColor={'#f7f7f7'}
                    style={{
                      flex: 1,
                      borderTopColor: '#f7f7f7',
                      borderTopWidth: 1
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: '#fff',
                        height: 256,
                        overflow: 'hidden'
                      }}
                    >
                      <View style={{ marginTop: 20 }}>
                        {renderDatepicker()}
                      </View>
                      <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={onCancel}
                        style={[styles.btnText, styles.cancel]}
                      >
                        <Text>Cancel</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={onDone}
                        style={[styles.btnText, styles.done]}
                      >
                        <Text>Done</Text>
                      </TouchableHighlight>
                    </View>
                  </TouchableHighlight>
                </TouchableHighlight>
              </View>
            </Modal>
          )}
        </View>
      </TouchableHighlight>
    </Animated.View>
  )
}

export default Datepicker

const styles = StyleSheet.create({
  textStyle: {
    paddingVertical: 15,
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    paddingHorizontal: 15,
    color: '#2C2948',
    marginBottom: 10
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cancel: {
    left: 0
  },
  done: {
    right: 0
  },
  label: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'poppins' : 'OpenSans-Regular',
    color: '#979797',
    marginBottom: 5
  },
  date: {
    fontSize: 13,
    color: '#7C7C7C',
    lineHeight: 16,
    fontWeight: '400'
  }
})
