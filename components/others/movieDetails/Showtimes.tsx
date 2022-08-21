import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  SafeAreaView
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Entypo, Feather } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'

import { Container } from '../../commons/Container'
import Info from '../../commons/Info'
import Segment from '../../commons/Segment'
import { MovieDate } from '../../commons/MovieDate'
import Button from '../../commons/Button'
import Calendar from '../../commons/Fader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAppDispatch } from '../../../store/Hooks/hooks'
import {
  setResolution,
  setTheatre,
  setTime,
  setDate
} from '../../../store/Features/Cinema/cinemaSlice'

const dates = [
  { day: 'today', weekday: 'wed' },
  {
    day: '23 may',
    weekday: 'thu'
  },
  {
    day: '24 may',
    weekday: 'fri'
  },
  {
    day: '25 may',
    weekday: 'sat'
  },
  {
    day: '26 may',
    weekday: 'sun'
  }
]

const cinema = [
  {
    label: 'Paragon Cinema',
    value: 'paragon'
  },
  {
    label: 'Genesis Deluxe Cinema',
    value: 'genesis'
  },
  {
    label: 'Cinepolis Cinema',
    value: 'cinepolis'
  }
]

const cinemaTimes = {
  paragon: {
    main: [
      {
        time: '8:30 AM',
        width: '50%'
      },
      {
        time: '9:30 AM',
        width: '20%'
      },
      {
        time: '10:00 AM',
        width: '85%'
      },
      {
        time: '12:30 PM',
        width: '10%'
      },
      {
        time: '13:45 PM',
        width: '40%'
      },
      {
        time: '15: 00 PM',
        width: '20%'
      }
    ],
    imax: [
      {
        time: '8:30 AM',
        width: '15%'
      },
      {
        time: '9:30 AM',
        width: '30%'
      },
      {
        time: '10:00 AM',
        width: '50%'
      },
      {
        time: '12:30 PM',
        width: '50%'
      },
      {
        time: '13:45 PM',
        width: '20%'
      },
      {
        time: '15: 00 PM',
        width: '10%'
      }
    ]
  },
  genesis: {
    main: [
      {
        time: '8:30 AM',
        width: '50%'
      },
      {
        time: '9:30 AM',

        width: '20%'
      },
      {
        time: '10:00 AM',
        width: '85%'
      },
      {
        time: '12:30 PM',
        width: '10%'
      },
      {
        time: '13:45 PM',
        width: '40%'
      }
    ],
    imax: [
      {
        time: '8:30 AM',
        width: '15%'
      },
      {
        time: '9:30 AM',
        width: '30%'
      },
      {
        time: '10:00 AM',

        width: '50%'
      },
      {
        time: '12:30 PM',

        width: '50%'
      },
      {
        time: '13:45 PM',
        width: '20%'
      }
    ]
  },
  cinepolis: {
    main: [
      {
        time: '8:30 AM',
        width: '50%'
      },
      {
        time: '9:30 AM',
        width: '20%'
      },
      {
        time: '10:00 AM',

        width: '85%'
      }
    ],
    imax: [
      {
        time: '8:30 AM',
        width: '15%'
      },
      {
        time: '9:30 AM',
        width: '30%'
      },
      {
        time: '10:00 AM',
        width: '50%'
      }
    ]
  }
}

type Props = {
  navigation: any
  tabIndex: number
  changeView: (index: number) => void
  tabs: any
  title: string
}

export default function Showtimes({ navigation, tabIndex, changeView, tabs, title }: Props) {
  // const [date, setDate] = useState(new Date(Date.now()))
  const [movieDate, setMovieDate] = useState('')
  const opacity = useState(new Animated.Value(0))[0] as any
  const [currentTab, setCurrentTab] = React.useState(0)
  const changeViews = (index: number) => setCurrentTab(index)
  const [selectedCinema, setSelectedCinema] = React.useState('paragon')
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedTime, setSelectedTime] = useState('')
  const [currentResolution, setCurrentResolution] = useState('')

  const dispatch = useAppDispatch()

  const onChange = (value: any) => {
    setMovieDate(value)
  }

  function fadeIn() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  function fadeOut() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    dispatch(setTheatre(selectedCinema))
  }, [selectedCinema])

  const filterDates = () => {
    const filteredDates = dates.filter((item, index) => index === currentTab)
    dispatch(setDate(filteredDates[0].day))
  }

  useEffect(() => {
    filterDates()
  }, [currentTab])

  return (
    <SafeAreaView
      style={{
        marginVertical: 20
      }}
    >
      <Info navigation={navigation} share>
        {title}
      </Info>
      <Segment tabs={tabs} currentIndex={tabIndex} onChange={changeView} />

      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        {showDatePicker && (
          <Calendar
            value={movieDate}
            opacity={opacity}
            defaultDate={new Date(Date.now())}
            onDateChange={onChange}
          />
        )}
        {!showDatePicker && (
          <>
            <View style={styles.top}>
              <Text style={styles.header}>Choose Date</Text>
              <TouchableOpacity
                onPress={() => {
                  if (showDatePicker) {
                    fadeOut()
                    setShowDatePicker(false)
                  } else {
                    fadeIn()
                    setShowDatePicker(true)
                  }
                }}
              >
                <Entypo name='calendar' size={24} color='#00E0FF' />
              </TouchableOpacity>
            </View>
            <MovieDate
              tabs={dates}
              currentIndex={currentTab}
              onChange={changeViews}
            />
            <View style={styles.bottom}>
              <Text style={styles.header}>Choose Cinema</Text>

              <Picker
                style={styles.picker}
                itemStyle={styles.pickerItem}
                selectedValue={selectedCinema}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedCinema(itemValue)
                }}
              >
                {cinema.map((item) => (
                  <Picker.Item
                    label={item.label}
                    value={item.value}
                    key={item.value}
                  />
                ))}
              </Picker>
              <Text style={styles.version}>2D</Text>
              <View style={styles.timesContainer}>
                {selectedCinema === 'paragon' && (
                  <>
                    {cinemaTimes.paragon.main.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          setCurrentResolution('2d')
                          dispatch(setTime(item.time))
                          setSelectedTime(item.time)
                          dispatch(setResolution('2d'))
                        }}
                        style={styles.timeHolder}
                        key={index}
                      >
                        <View
                          style={[
                            styles.timeBox,
                            {
                              backgroundColor:
                                selectedTime === item.time &&
                                currentResolution === '2d'
                                  ? '#D9251D'
                                  : '#2B3543'
                            }
                          ]}
                        >
                          <Text style={styles.time}>{item.time}</Text>
                        </View>
                        <View
                          style={{
                            borderColor: '#F8C42F',
                            borderWidth: 1,
                            width: item.width
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </>
                )}
                {selectedCinema === 'genesis' && (
                  <>
                    {cinemaTimes.genesis.main.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          setCurrentResolution('2d')
                          setSelectedTime(item.time)
                          dispatch(setTime(item.time))
                          dispatch(setResolution('2d'))
                        }}
                        style={styles.timeHolder}
                        key={index}
                      >
                        <View
                          style={[
                            styles.timeBox,
                            {
                              backgroundColor:
                                selectedTime === item.time &&
                                currentResolution === '2d'
                                  ? '#D9251D'
                                  : '#2B3543'
                            }
                          ]}
                        >
                          <Text style={styles.time}>{item.time}</Text>
                        </View>
                        <View
                          style={{
                            borderColor: '#F8C42F',
                            borderWidth: 1,
                            width: item.width
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </>
                )}
                {selectedCinema === 'cinepolis' && (
                  <>
                    {cinemaTimes.cinepolis.main.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          setCurrentResolution('2d')
                          setSelectedTime(item.time)
                          dispatch(setTime(item.time))
                          dispatch(setResolution('2d'))
                        }}
                        style={styles.timeHolder}
                        key={index}
                      >
                        <View
                          style={[
                            styles.timeBox,
                            {
                              backgroundColor:
                                selectedTime === item.time &&
                                currentResolution === '2d'
                                  ? '#D9251D'
                                  : '#2B3543'
                            }
                          ]}
                        >
                          <Text style={styles.time}>{item.time}</Text>
                        </View>
                        <View
                          style={{
                            borderColor: '#F8C42F',
                            borderWidth: 1,
                            width: item.width
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </>
                )}
              </View>

              <Text style={styles.version}>IMax</Text>
              <View style={styles.timesContainer}>
                {selectedCinema === 'paragon' && (
                  <>
                    {cinemaTimes.paragon.imax.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(setTime(item.time))
                          setSelectedTime(item.time)
                          setCurrentResolution('imax')
                          dispatch(setResolution('imax'))
                        }}
                        style={styles.timeHolder}
                        key={index}
                      >
                        <View
                          style={[
                            styles.timeBox,
                            {
                              backgroundColor:
                                selectedTime === item.time &&
                                currentResolution === 'imax'
                                  ? '#D9251D'
                                  : '#2B3543'
                            }
                          ]}
                        >
                          <Text style={styles.time}>{item.time}</Text>
                        </View>
                        <View
                          style={{
                            borderColor: '#F8C42F',
                            borderWidth: 1,
                            width: item.width
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </>
                )}
                {selectedCinema === 'genesis' && (
                  <>
                    {cinemaTimes.genesis.imax.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedTime(item.time)
                          dispatch(setTime(item.time))
                          dispatch(setResolution('imax'))
                          setCurrentResolution('imax')
                        }}
                        style={styles.timeHolder}
                        key={index}
                      >
                        <View
                          style={[
                            styles.timeBox,
                            {
                              backgroundColor:
                                selectedTime === item.time &&
                                currentResolution === 'imax'
                                  ? '#D9251D'
                                  : '#2B3543'
                            }
                          ]}
                        >
                          <Text style={styles.time}>{item.time}</Text>
                        </View>
                        <View
                          style={{
                            borderColor: '#F8C42F',
                            borderWidth: 1,
                            width: item.width
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </>
                )}
                {selectedCinema === 'cinepolis' && (
                  <>
                    {cinemaTimes.cinepolis.imax.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedTime(item.time)
                          dispatch(setTime(item.time))
                          dispatch(setResolution('imax'))
                          setCurrentResolution('imax')
                        }}
                        style={styles.timeHolder}
                        key={index}
                      >
                        <View
                          style={[
                            styles.timeBox,
                            {
                              backgroundColor:
                                selectedTime === item.time &&
                                currentResolution === 'imax'
                                  ? '#D9251D'
                                  : '#2B3543'
                            }
                          ]}
                        >
                          <Text style={styles.time}>{item.time}</Text>
                        </View>
                        <View
                          style={{
                            borderColor: '#F8C42F',
                            borderWidth: 1,
                            width: item.width
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </>
                )}
              </View>
              <Button
                onPress={() => navigation.navigate('SeatSelection')}
                disabled={selectedTime.length === 0}
              />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingBottom: 280
  },
  top: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  header: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'SF_Pro'
  },
  bottom: {
    marginTop: 25
  },
  picker: {
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#2B3543',
    marginVertical: 15
  },
  pickerItem: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SF_Pro',
    lineHeight: 20,
    height: 48
  },
  version: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 20,
    fontFamily: 'SF_Pro',
    marginVertical: 15,
    opacity: 0.5
  },
  timesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between'
  },
  timeHolder: { width: 102, marginBottom: 15 },
  timeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,

    borderRadius: 2
  },
  time: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'SF_Pro',
    lineHeight: 20
  },
  cancel: {
    color: '#fff',
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0,0, 0.6)'
  }
})
