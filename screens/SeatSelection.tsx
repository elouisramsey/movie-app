import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Animated,
  ScrollView
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect } from 'react'
import { Container } from '../components/commons/Container'
import Info from '../components/commons/Info'
import Button from '../components/commons/Button'

const ROW_A = [
  {
    id: 'a1',
    available: true,
    booked: false,
    selected: false,
    opacity: 0,
    vip: false
  },
  {
    id: 'a2',
    available: true,
    booked: false,
    selected: false,
    opacity: 0,
    vip: false
  },
  {
    id: 'a3',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'a4',
    available: true,
    booked: false,
    selected: false,
    opacity: 0,
    vip: false
  },
  {
    id: 'a5',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'a6',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'a7',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'a8',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'a9',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'a10',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'a11',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'a12',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  }
]

const ROW_B = [
  {
    id: 'b1',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b2',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b3',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b4',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b5',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b6',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b7',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b8',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b9',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b10',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b11',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b12',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b13',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b14',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b15',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'b16',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  }
]

const ROW_C = [
  {
    id: 'c1',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'c2',
    available: true,
    booked: false,
    selected: false,
    opacity: 0,
    vip: false
  },
  {
    id: 'c3',
    available: true,
    booked: false,
    selected: false,
    opacity: 0,
    vip: false
  },
  {
    id: 'c4',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'c5',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'c6',
    available: true,
    booked: false,
    selected: false,
    opacity: 0,
    vip: false
  },
  {
    id: 'c7',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'c8',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'c9',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'c10',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'c11',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'c12',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  }
]

const ROW_D = [
  {
    id: 'd1',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'd2',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'd3',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'd4',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'd5',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'd6',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'd7',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'd8',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'd9',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  }
]

const ROW_E = [
  {
    id: 'e1',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: true
  },
  {
    id: 'e2',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: true
  },
  {
    id: 'e3',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: true
  },
  {
    id: 'e4',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: true
  },
  {
    id: 'e5',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: true
  },
  {
    id: 'e6',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: true
  },
  {
    id: 'e7',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: true
  },
  {
    id: 'e8',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: true
  },
  {
    id: 'e9',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: true
  },

  {
    id: 'e10',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: true
  },
  {
    id: 'e11',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: true
  },
  {
    id: 'e12',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: true
  }
]

const ROW_F = [
  {
    id: 'f1',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'f2',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'f3',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'f4',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'f5',
    available: false,
    booked: true,
    selected: false,

    opacity: 1,
    vip: false
  },
  {
    id: 'f6',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'f7',
    available: true,
    booked: false,
    selected: false,

    opacity: 1,
    vip: false
  },
  {
    id: 'f8',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'f9',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  }
]

const ROW_G = [
  {
    id: 'g1',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'g2',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'g3',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'g4',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'g5',
    available: false,
    booked: true,
    selected: false,

    opacity: 1,
    vip: false
  },
  {
    id: 'g6',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'g7',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'g8',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'g9',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  }
]

const ROW_H = [
  {
    id: 'h1',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'h2',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'h3',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'h4',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'h5',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'h6',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'h7',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'h8',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'h9',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'h10',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'h11',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'h12',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  }
]

const ROW_I = [
  {
    id: 'i1',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'i2',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'i3',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'i4',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'i5',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'i6',
    available: false,
    booked: true,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'i7',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'i8',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  },
  {
    id: 'i9',
    available: true,
    booked: false,
    selected: false,
    opacity: 1,
    vip: false
  }
]

interface Props {
  available: boolean
  onPress: () => void
  vip: boolean
  booked: boolean
  id: String
  selected: boolean
  opacity: number
}

interface Selection {
  navigation: any
}

const Seat: React.FC<Props> = ({
  available,
  onPress,
  vip,
  booked,
  id,
  selected,
  opacity
}) => {
  return (
    <TouchableOpacity disabled={booked} onPress={onPress}>
      <View
        style={[
          styles.seat,
          {
            backgroundColor: available
              ? 'transparent'
              : booked && !available
              ? '#323D4C'
              : '#47CFFF',
            borderColor: vip ? '#47CFFF' : '#475363',
            opacity
          }
        ]}
      />
    </TouchableOpacity>
  )
}

const SeatSelection: React.FC<Selection> = ({ navigation }) => {
  const result = [].concat(
    ...ROW_A,
    ...ROW_B,
    ...ROW_C,
    ...ROW_D,
    ...ROW_E,
    ...ROW_F,
    ...ROW_G,
    ...ROW_H,
    ...ROW_I
  )
  const [selectedSeats, setSelectedSeats] = React.useState(result)
  const [amount, setAmount] = React.useState(0)
  const [rows, setRows] = React.useState('')

  const toggleSeat = (seat) => {
    console.log(seat.selected)
    seat.selected = !seat.selected
    setSelectedSeats([...selectedSeats])
  }

  useEffect(() => {
    const amount = selectedSeats.filter((seat) => seat.selected).length
    setAmount(amount * 12)

    const acc =[]
    const row = selectedSeats.filter(seat => {
      if (seat.selected) {
        const row = acc.push(seat.id)
        return row
      }
    })
    setRows(acc.join(', '))
  }, [selectedSeats])

  return (
    <Container>
      <Info navigation={navigation}>
        <Image
          source={require('../assets/images/tiny.png')}
          style={{ height: 32, width: 32 }}
        />
        <View style={{ paddingLeft: 5 }}>
          <Text style={styles.title}>John Wick 3: Parabellum</Text>
          <Text style={styles.time}>8:30 - 10:00 AM in 24 May, 2019</Text>
        </View>
      </Info>
      <View style={styles.container}>
        <View style={styles.screen}>
          <Image source={require('../assets/images/screen.png')} />
          <Text style={styles.screenText}>Screen</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <View style={styles.arrangeRow}>
              {ROW_A.map((item) => {
                return (
                  <View style={{ width: '33%' }} key={item.id}>
                    <Seat
                      vip={item.vip}
                      onPress={() => toggleSeat(item)}
                      selected={item.selected}
                      available={item.available}
                      id={item.id}
                      opacity={item.opacity}
                      booked={item.booked}
                    />
                  </View>
                )
              })}
            </View>
          </View>
          <View style={[styles.rowContainer, { width: '40%' }]}>
            <View style={styles.arrangeRow}>
              {ROW_B.map((item) => {
                return (
                  <View style={{ width: '25%' }} key={item.id}>
                    <Seat
                      vip={item.vip}
                      onPress={() => toggleSeat(item)}
                      selected={true}
                      available={item.available}
                      id={item.id}
                      opacity={item.opacity}
                      booked={item.booked}
                    />
                  </View>
                )
              })}
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.arrangeRow}>
              {ROW_C.map((item) => {
                return (
                  <View style={{ width: '33%' }} key={item.id}>
                    <Seat
                      vip={item.vip}
                      onPress={() => toggleSeat(item)}
                      selected={true}
                      available={item.available}
                      id={item.id}
                      opacity={item.opacity}
                      booked={item.booked}
                    />
                  </View>
                )
              })}
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <View style={styles.arrangeRow}>
              {ROW_D.map((item) => {
                return (
                  <View style={{ width: '33%' }} key={item.id}>
                    <Seat
                      vip={item.vip}
                      onPress={() => toggleSeat(item)}
                      selected={true}
                      available={item.available}
                      id={item.id}
                      opacity={item.opacity}
                      booked={item.booked}
                    />
                  </View>
                )
              })}
            </View>
          </View>
          <View style={[styles.rowContainer, { width: '40%' }]}>
            <View style={styles.arrangeRow}>
              {ROW_E.map((item) => {
                return (
                  <View style={{ width: '25%' }} key={item.id}>
                    <Seat
                      vip={item.vip}
                      onPress={() => toggleSeat(item)}
                      selected={true}
                      available={item.available}
                      id={item.id}
                      opacity={item.opacity}
                      booked={item.booked}
                    />
                  </View>
                )
              })}
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.arrangeRow}>
              {ROW_F.map((item) => {
                return (
                  <View style={{ width: '33%' }} key={item.id}>
                    <Seat
                      vip={item.vip}
                      onPress={() => toggleSeat(item)}
                      selected={true}
                      available={item.available}
                      id={item.id}
                      opacity={item.opacity}
                      booked={item.booked}
                    />
                  </View>
                )
              })}
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <View style={styles.arrangeRow}>
              {ROW_G.map((item) => {
                return (
                  <View style={{ width: '33%' }} key={item.id}>
                    <Seat
                      vip={item.vip}
                      onPress={() => toggleSeat(item)}
                      selected={true}
                      available={item.available}
                      id={item.id}
                      opacity={item.opacity}
                      booked={item.booked}
                    />
                  </View>
                )
              })}
            </View>
          </View>
          <View style={[styles.rowContainer, { width: '40%' }]}>
            <View style={styles.arrangeRow}>
              {ROW_H.map((item) => {
                return (
                  <View style={{ width: '25%' }} key={item.id}>
                    <Seat
                      vip={item.vip}
                      onPress={() => toggleSeat(item)}
                      selected={true}
                      available={item.available}
                      id={item.id}
                      opacity={item.opacity}
                      booked={item.booked}
                    />
                  </View>
                )
              })}
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.arrangeRow}>
              {ROW_I.map((item) => {
                return (
                  <View style={{ width: '33%' }} key={item.id}>
                    <Seat
                      vip={item.vip}
                      onPress={() => toggleSeat(item)}
                      selected={true}
                      available={item.available}
                      id={item.id}
                      opacity={item.opacity}
                      booked={item.booked}
                    />
                  </View>
                )
              })}
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoHolder}>
            <View style={styles.seat} />
            <Text style={styles.infoText}>Available</Text>
          </View>
          <View style={styles.infoHolder}>
            <View style={[styles.seat, { backgroundColor: '#323D4C' }]} />
            <Text style={styles.infoText}>Booked</Text>
          </View>
          <View style={styles.infoHolder}>
            <View style={[styles.seat, { backgroundColor: '#47CFFF' }]} />
            <Text style={styles.infoText}>Selected</Text>
          </View>
          <View style={styles.infoHolder}>
            <View style={[styles.seat, { borderColor: '#47CFFF' }]} />
            <Text style={styles.infoText}>VIP</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View>
          <Text style={styles.selectedSeat}>{rows} selected</Text>
          <Text style={styles.amount}>${amount}.00</Text>
        </View>
        <View style={{ width: '45%' }}>
          <Button title='Continue' onPress={() => navigation.navigate('Extra')} />
        </View>
      </View>
    </Container>
  )
}

export { SeatSelection, Seat }

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'SF_Pro'
  },
  time: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'SF_Pro',
    opacity: 0.5,
    marginTop: 2
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  screenText: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.5,
    fontFamily: 'SF_Pro',
    textTransform: 'uppercase'
  },
  rowContainer: {
    width: '25%'
  },
  screen: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  arrangeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  seat: {
    height: 20,
    width: 20,
    borderRadius: 2,
    borderColor: '#475363',
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 5
  },
  info: {
    width: '100%',
    borderTopColor: '#2C3F5B',
    borderTopWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  infoHolder: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'SF_Pro',
    opacity: 0.5
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#2B3543',
    paddingHorizontal: 25,
    paddingVertical: 5
  },
  selectedSeat: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'SF_Pro',
    opacity: 0.5,
    lineHeight: 20,
    textTransform: 'uppercase'
  },
  amount: {
    color: '#FFC045',
    fontSize: 24,
    fontFamily: 'SF_Pro'
  }
})
