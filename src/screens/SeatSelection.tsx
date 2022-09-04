import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

import { Container } from 'src/components/commons/Container'
import Info from 'src/components/commons/Info'
import { cinemaRolls } from 'store/FakeData'
import { setSelectedSeat } from 'store/Features/Cinema/cinemaSlice'
import { addTicket } from 'store/Features/Ticket/ticketSlice'
import { totalPriceSelector } from 'store/Hooks/costCal'
import { useAppSelector, useAppDispatch } from 'store/Hooks/hooks'
import Button from 'src/components/commons/Button'

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
            backgroundColor:
              !booked && !available && selected
                ? '#47CFFF'
                : booked
                ? '#323D4C'
                : 'transparent',

            borderColor: vip ? '#47CFFF' : '#475363',
            opacity
          }
        ]}
      />
    </TouchableOpacity>
  )
}

const SeatSelection: React.FC<Selection> = ({ navigation }) => {
  const [selectedSeats, setSelectedSeats] = React.useState<any>([] as any)
  const [rows, setRows] = React.useState('')

  const items = useAppSelector((state) => state.ticket.seats)
  const selectedInfo = useAppSelector((state) => state.cinema)
  const { time, movieName, moviePoster, date } = selectedInfo

  const dispatch = useAppDispatch()
  const totalPrice = useAppSelector(totalPriceSelector)

  const toggleSeat = (seat: any) => {
    setSelectedSeats(
      selectedSeats.map((seatArr: any) => {
        if (seatArr.id === seat.id) {
          seatArr.selected = !seatArr.selected
          seatArr.available = !seatArr.available
        }
        return seatArr
      })
    )
    dispatch(addTicket(seat))
  }

  useEffect(() => {
    const acc = [] as any[]
    const row = items.filter((seat: any) => {
      if (seat.selected) {
        const row = acc.push(seat.id)
        return row
      }
    })
    setRows(acc.join(', '))
    return () => {}
  }, [selectedSeats])

  useEffect(() => {
    setSelectedSeats(cinemaRolls)
    return () => {}
  }, [])

  return (
    <>
      <Container>
        <Info
          navigation={navigation} // clear={true}
        >
          <Image
            source={{
              uri: moviePoster
            }}
            style={{ height: 32, width: 32 }}
          />
          <View style={{ paddingLeft: 5 }}>
            <Text style={styles.title}>{movieName}</Text>
            <Text style={styles.time}>
              {time} {date}
            </Text>
          </View>
        </Info>
        <View style={styles.container}>
          <View style={styles.screen}>
            <Image source={require('assets/images/screen.png')} />
            <Text style={styles.screenText}>Screen</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.rowContainer}>
              <View style={styles.arrangeRow}>
                {items
                  .filter((seat: any) => seat.id[0].includes('a'))
                  .map((item: any) => (
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
                  ))}
              </View>
            </View>
            <View style={[styles.rowContainer, { width: '40%' }]}>
              <View style={styles.arrangeRow}>
                {items
                  .filter((seat: any) => seat.id[0].includes('b'))
                  .map((item: any) => (
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
                  ))}
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.arrangeRow}>
                {items
                  .filter((seat: any) => seat.id[0].includes('c'))
                  .map((item: any) => (
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
                  ))}
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.rowContainer}>
              <View style={styles.arrangeRow}>
                {items
                  .filter((item) => item.id[0] === 'd')
                  .map((item) => {
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
                {items
                  .filter((item) => item.id[0] === 'e')
                  .map((item) => {
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
                {items
                  .filter((item) => item.id[0].includes('f'))
                  .map((item) => {
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
                {items
                  .filter((item) => item.id[0].includes('g'))
                  .map((item) => (
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
                  ))}
              </View>
            </View>
            <View style={[styles.rowContainer, { width: '40%' }]}>
              <View style={styles.arrangeRow}>
                {items
                  .filter((item) => item.id[0].includes('h'))
                  .map((item) => (
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
                  ))}
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.arrangeRow}>
                {items
                  .filter((item) => item.id[0].includes('i'))
                  .map((item) => (
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
                  ))}
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
      </Container>
      <View style={styles.bottom}>
        <View
          style={{
            width: '50%'
          }}
        >
          <Text style={styles.selectedSeat}>{rows} selected</Text>
          <Text style={styles.amount}>${totalPrice}.00</Text>
        </View>
        <View style={{ width: '45%' }}>
          <Button
            disabled={totalPrice === 0}
            title='Continue'
            onPress={() => {
              dispatch(setSelectedSeat(rows))
              navigation.navigate('Extra')
            }}
          />
        </View>
      </View>
    </>
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
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // width: '100%'
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
