import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { FontAwesome, Ionicons, Foundation, Feather } from '@expo/vector-icons'

import { Header } from 'src/components/commons/Header'
import { COLORS } from 'src/Styles/styles'

const NotificationItems = [
  {
    id: 1,
    type: 'booking',
    message: 'Congrats! You have booked John Wick 3 movie ticket successfully',
    time: '10:48:25 AM'
  },
  {
    type: 'reminder',
    message:
      'Hi Morgan. This is just a reminder for your movie today in 13:45 PM.',
    time: '3 hours ago',
    id: 2
  },
  {
    id: 3,
    type: 'cashback',
    message: 'You’ve got an cashback for the past ticket booking.',
    time: '5 days ago'
  },
  {
    type: 'discount',
    id: 4,
    message: 'You just got the discount 30% for booking a movie in this week.',
    time: '5 days ago'
  },
  {
    id: 5,
    type: 'booking',
    message: 'Congrat! You booked John Wick 3 movie ticket successfully.',
    time: '4 weeks ago'
  }
]

const Notification: React.FC = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <Header title={'Notification'} />
      <View style={styles.content}>
        {NotificationItems.map((item) => (
          <View key={item.id}>
            <View style={[styles.notificationItem]}>
              <View
                style={[
                  styles.iconHolder,
                  {
                    backgroundColor:
                      item.type === 'booking'
                        ? 'rgba(76, 217, 100, 0.2)'
                        : item.type === 'reminder'
                        ? 'rgba(255, 71, 98, 0.2)'
                        : item.type === 'cashback'
                        ? 'rgba(217, 211, 76, 0.2)'
                        : 'rgba(71, 207, 255, 0.2)'
                  }
                ]}
              >
                {item.type === 'booking' && (
                  <FontAwesome name='thumbs-up' size={20} color='#4CD964' />
                )}
                {item.type === 'reminder' && (
                  <Ionicons name='md-notifications' size={20} color='#E51937' />
                )}
                {item.type === 'cashback' && (
                  <Foundation name='dollar' size={20} color='#D9D34C' />
                )}
                {item.type === 'discount' && (
                  <Feather name='percent' size={20} color='#47CFFF' />
                )}
              </View>
              <View style={styles.contentHolder}>
                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
            <View style={{ overflow: 'hidden' }}>
              <View style={styles.borderHack} />
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff'
  },
  content: {
    width: '100%'
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 20,
    width: '100%',
    paddingHorizontal: 15
  },
  borderHack: {
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: COLORS.grayed,
    borderRadius: 8,
    marginTop: -2
  },
  iconHolder: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentHolder: {
    marginLeft: 15,
    width: '85%'
  },
  message: {
    fontSize: 14,
    fontFamily: 'SF_Pro',
    color: '#fff',
    lineHeight: 20
  },
  time: {
    fontSize: 12,
    fontFamily: 'SF_Pro',
    color: '#fff',
    opacity: 0.5,
    marginTop: 5
  }
})

export { Notification }
