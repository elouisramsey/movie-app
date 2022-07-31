import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MovieDetails from './screens/MovieDetails'
import Home from './screens/Home'
import CastAndCrew from './screens/CastAndCrew'
import Info from './components/commons/Info'
import Videos from './screens/Videos'
import Photos from './screens/Photos'
import { Blog } from './screens/Blog'
import { BlogDetails } from './screens/BlogDetails'
import { Notification } from './screens/Notification'
import Tickets from './screens/Tickets'
import { SeatSelection } from './screens/SeatSelection'
import { Extra } from './screens/Extra'
import {PaymentPage} from './screens/PaymentPage'
import { Profile } from './screens/Profile'
import AccountInformation from './screens/AccountInformation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ResetPassword from './screens/ResetPassword'
import TransactionHistory from './screens/TransactionHistory'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#0F1B2B' },
        headerTintColor: '#0F1B2B'
      }}
    >
      <Stack.Screen
        name='MovieDetails'
        component={MovieDetails}
        options={{
          gestureEnabled: true
        }}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          gestureEnabled: true
        }}
      />
      <Stack.Screen
        name='CastAndCrew'
        component={CastAndCrew}
        options={{
          gestureEnabled: true
        }}
      />
      <Stack.Screen
        name='Extra'
        component={Extra}
        options={{
          gestureEnabled: true
        }}
      />
      <Stack.Screen
        name='Payment'
        component={PaymentPage}
        options={{
          gestureEnabled: true
        }}
      />
      <Stack.Screen
        name='Videos'
        component={Videos}
        options={{
          gestureEnabled: true
        }}
      />
      <Stack.Screen
        name='Photos'
        component={Photos}
        options={{
          gestureEnabled: true
        }}
      />
      <Stack.Screen
        name='Blog'
        component={Blog}
        options={{
          gestureEnabled: true
        }}
      />
      <Stack.Screen
        name='BlogDetails'
        component={BlogDetails}
        options={{
          gestureEnabled: true
        }}
      />
      <Stack.Screen
        name='SeatSelection'
        component={SeatSelection}
        options={{
          gestureEnabled: true
        }}
      />
    </Stack.Navigator>
  )
}

const NotificationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Notification'
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#0F1B2B' },
        headerTintColor: '#0F1B2B'
      }}
    >
      <Stack.Screen
        name='Notification'
        component={Notification}
        options={{
          gestureEnabled: true
        }}
      />
    </Stack.Navigator>
  )
}

const TicketStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Tickets'
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#0F1B2B', color: '#fff' },
        headerTintColor: '#0F1B2B'
      }}
    >
      <Stack.Screen
        name='Tickets'
        component={Tickets}
        options={{
          gestureEnabled: true
        }}
      />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName='ProfileScreen'
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#0F1B2B', color: '#fff' },
          headerTintColor: '#0F1B2B'
        }}
      >
        <Stack.Screen
          name='ProfileScreen'
          component={Profile}
          options={{
            gestureEnabled: true
          }}
        />
        <Stack.Screen
          name='AccountInformation'
          component={AccountInformation}
          options={{
            gestureEnabled: true
          }}
        />
        <Stack.Screen
          name='Password'
          component={ResetPassword}
          options={{
            gestureEnabled: true
          }}
        />
        <Stack.Screen
          name='TransactionHistory'
          component={TransactionHistory}
          options={{
            gestureEnabled: true
          }}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}


export { MainStack, NotificationStack, TicketStack, ProfileStack }