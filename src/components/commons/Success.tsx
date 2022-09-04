import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { FontAwesome5, Feather } from '@expo/vector-icons'

import { reset } from 'store/Features/Cinema/cinemaSlice'
import { useAppDispatch, useAppSelector } from 'store/Hooks/hooks'


type IconProps = {
  iconName: keyof typeof Feather.glyphMap
}

type Props = {
  navigation: any
  showModal: boolean
  contentWrapperStyle?: object
}

const Success = ({ showModal, contentWrapperStyle, navigation }: Props) => {
  const dispatch = useAppDispatch()
  const selectedInfo = useAppSelector((state) => state.cinema)
  const { date, time, theatre, movieName, resolution, selectedSeat } =
    selectedInfo
  return (
    <>
      <Modal transparent={true} animationType={'none'} visible={showModal}>
        <View style={styles.modalBackground}>
          <View style={[styles.contentWrapper, contentWrapperStyle]}>
            <View style={styles.card}>
              <View style={styles.imageHolder}>
                <View style={styles.mark}>
                  <FontAwesome5 name='check' size={24} color='#4CD964' />
                </View>
              </View>
              <Text style={styles.title}>Congratulations!</Text>
              <Text style={styles.subText}>
                You have successfully booked the movie
              </Text>

              <View
                style={{ overflow: 'hidden', width: '100%', marginBottom: 25 }}
              >
                <View style={styles.borderHack} />
              </View>
              {/* <View style={styles.rows}>
                <View>
                  <View>
                    <Text style={styles.header}>Theatre</Text>
                    <Text style={styles.text}>{theatre}</Text>
                  </View>
                  <View>
                    <Text style={styles.header}>Date</Text>
                    <Text style={styles.text}>{date}</Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={styles.header}>Seat</Text>
                    <Text style={styles.text}>{selectedSeat}</Text>
                  </View>
                  <View>
                    <Text style={styles.header}>Time</Text>
                    <Text style={styles.text}>{time}</Text>
                  </View>
                </View>
              </View> */}
            </View>
            <TouchableOpacity
              style={styles.cancel}
              onPress={() => {
                navigation.navigate('Home')
                dispatch(reset())
                // dispatch(resetTicket())
              }}
            >
              <Feather name='x' size={24} color='rgba(255, 255, 255, 0.8)' />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default Success

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  contentWrapper: {
    overflow: 'hidden',
    width: '90%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageHolder: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#2b3543',
    height: 450,
    width: 308,
    borderRadius: 8,
    justifyContent: 'center',
    padding: 20
  },
  mark: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: 'rgba(76, 217, 100, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontFamily: 'SF_Pro',
    color: '#fff',
    marginBottom: 15,
    textTransform: 'capitalize',
    textAlign: 'center'
  },
  subText: {
    fontSize: 16,
    fontFamily: 'SF_Pro',
    color: '#fff',
    marginBottom: 20,
    opacity: 0.5,
    textAlign: 'center'
  },
  borderHack: {
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: '#DFDFDF',
    borderRadius: 8,
    marginTop: -2
  },
  rows: {
    marginBottom: 25,
    flexDirection: 'row'
  },
  header: {
    fontSize: 12,
    fontFamily: 'SF_Pro',
    color: '#fff',
    opacity: 0.5,
    marginBottom: 5,
    textTransform: 'uppercase'
  },
  text: {
    fontSize: 14,
    fontFamily: 'SF_Pro',
    color: '#fff',
    marginRight: 15,
    marginBottom: 25
  },
  cancel: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginTop: 25
  }
})
