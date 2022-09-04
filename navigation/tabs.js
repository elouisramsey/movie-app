import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons
} from '@expo/vector-icons'

import { MainStack, NotificationStack, ProfileStack, TicketStack } from '../Routes'

const Tab = createBottomTabNavigator()

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [
          {
            display: 'flex',
            borderTopWidth: 1,
            borderTopColor: '#0F1B2B',
            backgroundColor: '#0F1B2B',
            elevation: 0,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center'
          },
          null
        ]
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={MainStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name='cookie'
              size={32}
              style={
                focused
                  ? { color: '#47CFFF' }
                  : { color: '#FFFFFF', opacity: 0.3 }
              }
            />
          )
        }}
      />
      <Tab.Screen
        name='Ticketing'
        component={TicketStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='ticket-outline'
              size={32}
              style={
                focused
                  ? { color: '#47CFFF' }
                  : { color: '#FFFFFF', opacity: 0.3 }
              }
            />
          )
        }}
      />
      <Tab.Screen
        name='NotificationScreen'
        component={NotificationStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='notifications-outline'
              size={32}
              style={
                focused
                  ? { color: '#47CFFF' }
                  : { color: '#FFFFFF', opacity: 0.3 }
              }
            />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='person-outline'
              size={32}
              style={
                focused
                  ? { color: '#47CFFF' }
                  : { color: '#FFFFFF', opacity: 0.3 }
              }
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}