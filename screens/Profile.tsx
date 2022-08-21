import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import React from 'react'
import {
  AntDesign,
  Entypo,
  Ionicons,
  Foundation,
  Fontisto,
  MaterialIcons
} from '@expo/vector-icons'
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth, API, graphqlOperation } from 'aws-amplify'

import { Container } from '../components/commons/Container'
import { Header } from '../components/commons/Header'
import Login from './Login'
import { useAppSelector } from '../store/Hooks/hooks'

const links = [
  {
    id: 1,
    name: 'Account Information',
    icon: <Ionicons name='person' size={20} color='rgba(255, 255, 255, 0.7)' />,
    page: 'AccountInformation'
  },
  {
    id: 2,
    name: 'Transaction History',
    icon: (
      <Foundation name='dollar' size={20} color='rgba(255, 255, 255, 0.7)' />
    ),
    page: 'TransactionHistory'
  },
  {
    id: 3,
    name: 'Rate this app',
    icon: <Fontisto name='star' size={20} color='rgba(255, 255, 255, 0.7)' />,
    page: 'Rate'
  },
  {
    id: 4,
    name: 'Privacy Policy',
    icon: <Entypo name='folder' size={20} color='rgba(255, 255, 255, 0.7)' />,
    page: 'PrivacyPolicy'
  }
]

type Props = {
  navigation: any
}

const Profile = ({ navigation }: Props) => {
  const [user, setUser] = React.useState<any>(null)
  const loggedInUser = useAppSelector((state) => state.user.user)

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const isUserAvailable = await Auth.currentAuthenticatedUser()
        if (isUserAvailable) {
          setUser(true)
        } else {
          navigation.navigate('Login')
        }
      } catch (error) {
        console.log(error)
        navigation.navigate('Login')
      }
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    try {
      await Auth.signOut()
        .then(() => {
          navigation.navigate('Login')
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 35
      }}
    >
      <Header
        onPress={!user ? () => navigation.navigate('Login') : handleLogout}
        title={!loggedInUser ? 'Sign in' : 'Profile'}
        link={loggedInUser ? 'Sign out' : 'Sign Up'}
      />
      {loggedInUser ? (
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.imageHolder}>
            <Image
              source={require('../assets/images/dp.jpeg')}
              style={styles.image}
            />
          </View>

          <Text style={styles.name}>{loggedInUser?.name}</Text>
          <Text style={styles.email}>{loggedInUser?.email}</Text>
          <View style={styles.data}>
            <View style={styles.dataItem}>
              <Text style={styles.dataItemNo}>{loggedInUser?.points}</Text>
              <Text style={styles.dataItemLabel}>total points</Text>
            </View>
            <View
              style={{
                borderRightWidth: 1,
                borderRightColor: 'rgba(255, 255, 255, 0.2)',
                borderStyle: 'solid',
                width: 10,
                height: '100%'
              }}
            />
            <View style={styles.dataItem}>
              <Text style={styles.dataItemNo}>{loggedInUser?.watched}</Text>
              <Text style={styles.dataItemLabel}>MOVIES WATCHED</Text>
            </View>
          </View>
          <View style={styles.linkContainer}>
            {links.map((link) => (
              <TouchableOpacity
                key={link.id}
                style={styles.button}
                onPress={() => navigation.navigate(link.page)}
              >
                <View style={styles.textHolder}>
                  {link.icon}
                  <Text style={styles.buttonText}>{link.name}</Text>
                </View>
                <MaterialIcons
                  name='arrow-forward-ios'
                  size={20}
                  color='rgba(255, 255, 255, 0.7)'
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <Login navigateTopage={true} />
      )}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
    marginTop: 25
  },
  imageHolder: {
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 120 / 2,
    marginBottom: 25
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  name: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 5,
    fontFamily: 'SF_Pro',
    textTransform: 'capitalize',
    textAlign: 'center'
  },
  email: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'SF_Pro',
    textTransform: 'lowercase',
    opacity: 0.5,
    textAlign: 'center',
    marginBottom: 30
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
    alignItems: 'center'
  },
  dataItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataItemNo: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'SF_Pro',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: 5
  },
  dataItemLabel: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'SF_Pro',
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 1.5,
    opacity: 0.5
  },
  linkContainer: {
    width: '100%',
    marginTop: 30
  },
  button: {
    backgroundColor: '#2B3543',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: '#2B3543',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 10,
    height: 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SF_Pro',
    opacity: 0.7,
    textTransform: 'capitalize',
    marginLeft: 10
  },
  textHolder: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
