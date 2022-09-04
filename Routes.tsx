import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AccountInformation from 'src/screens/AccountInformation'
import Signup from 'src/screens/Auth/Signup'
import { Blog } from 'src/screens/Blog'
import { BlogDetails } from 'src/screens/BlogDetails'
import CastAndCrew from 'src/screens/CastAndCrew'
import { Extra } from 'src/screens/Extra'
import Home from 'src/screens/Home'
import Login from 'src/screens/Login'
import MovieDetails from 'src/screens/MovieDetails'
import { PaymentPage } from 'src/screens/PaymentPage'
import Photos from 'src/screens/Photos'
import Profile from 'src/screens/Profile'
import ResetPassword from 'src/screens/ResetPassword'
import { SeatSelection } from 'src/screens/SeatSelection'
import Tickets from 'src/screens/Tickets'
import TransactionHistory from 'src/screens/TransactionHistory'
import Videos from 'src/screens/Videos'
import { Notification } from 'src/screens/Notification'

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
        cardStyle: { backgroundColor: '#0F1B2B' },
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
          cardStyle: { backgroundColor: '#0F1B2B' },
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
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}

export { MainStack, NotificationStack, TicketStack, ProfileStack }
