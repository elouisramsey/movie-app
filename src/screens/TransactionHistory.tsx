import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Entypo, Foundation } from '@expo/vector-icons'

import { Container } from 'src/components/commons/Container'
import Info from 'src/components/commons/Info'



const NotificationItems = [
  {
    id: 'booking',
    label: 'John Wick 3: Parabellum',
    date: '24 may, 2019',
    amount: '$54.00'
  },
  {
    id: 'booking',
    label: 'King of the Monster',
    date: '24 may, 2019',
    amount: '$38.00'
  },
  {
    id: 'transfer',
    label: 'Bank Transfer',
    date: '24 may, 2019',
    amount: '$60.00'
  },
  {
    id: 'booking',
    label: 'The secret life of pets',
    date: '24 may, 2019',
    amount: '$54.00'
  }
]

type Props = {
  navigation: any
}

const TransactionHistory = (props: Props) => {
  return (
    <Container>
      <Info navigation={props.navigation}>{'Transaction History'}</Info>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.logo}>
            <View style={styles.logo}>
              <Image
                source={require('assets/images/visa.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.rightBg} />
          <View style={[styles.rightBg, styles.leftBg]} />
          <View style={styles.cardNo}>
            <Text style={styles.numbers}>{'4319'}</Text>
            <Text style={styles.numbers}>{'5312'}</Text>
            <Text style={styles.numbers}>{'0215'}</Text>
            <Text style={styles.numbers}>{'1234'}</Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.bottomLeft}>
              <Text style={styles.bottomHeader}>card holder</Text>
              <Text style={styles.bottomText}>Annablle Danki</Text>
            </View>
            <View style={styles.bottomLeft}>
              <Text style={[styles.bottomHeader, { textAlign: 'right' }]}>
                expires
              </Text>
              <Text style={[styles.bottomText, { textAlign: 'right' }]}>
                08/23
              </Text>
            </View>
          </View>
        </View>

        <View>
          {NotificationItems.map((item, i) => (
            <View style={styles.notificationCard} key={i}>
              <View
                style={[
                  styles.iconHolder,
                  {
                    backgroundColor:
                      item.id === 'booking'
                        ? 'rgba(71, 207, 255, 0.2)'
                        : 'rgba(251, 255, 71, 0.2)'
                  }
                ]}
              >
                {item.id === 'booking' && (
                  <Entypo name='calendar' size={16} color='#47CFFF' />
                )}
                {item.id === 'transfer' && (
                  <Foundation name='dollar' size={16} color='#FBFF47' />
                )}
              </View>

              <View style={styles.texts}>
                <View>
                  <Text style={[styles.id]}>{item.id}</Text>
                  <Text style={styles.label}>{item.label}</Text>
                </View>
                <View>
                  <Text
                    style={[
                      styles.amount,
                      { color: item.id === 'booking' ? '#E51937' : '#19E58F', textAlign: 'right' }
                    ]}
                  >
                    {item.amount}
                  </Text>
                  <Text style={[styles.label, {textAlign: 'right'}]}>{item.date}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  card: {
    height: 192,
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#00428C',
    marginBottom: 30,
    padding: 30
  },
  logo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    height: 20.47,
    width: 64,
    resizeMode: 'contain'
  },
  rightBg: {
    width: 220,
    height: 60,
    backgroundColor: '#0052a4',
    opacity: 0.5,
    position: 'absolute',
    right: 0,
    top: 40,
    zIndex: -1
  },
  leftBg: {
    left: 0,
    top: 75,
    zIndex: -2
  },
  cardNo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  numbers: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'SF_Pro',
    textAlign: 'center'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  bottomLeft: {},
  bottomHeader: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'SF_Pro',
    textTransform: 'uppercase',
    opacity: 0.4,
    letterSpacing: 1.5,
    marginBottom: 5
  },
  bottomText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'SF_Pro',
    textTransform: 'uppercase',
    letterSpacing: 1.5
  },
  notificationCard: {
    height: 80,
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#2b3543',
    marginBottom: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  texts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%'
  },
  id: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'SF_Pro',
    textTransform: 'capitalize',
    letterSpacing: 1.5,
    marginBottom: 5
  },
  label: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'SF_Pro',
    textTransform: 'capitalize',
    opacity: 0.5
  },
  iconHolder: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  amount: {
    fontSize: 14,
    fontFamily: 'SF_Pro',
    marginBottom: 5
  }
})

export default TransactionHistory
