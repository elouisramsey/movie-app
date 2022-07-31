import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  AntDesign,
  Entypo,
  Ionicons,
  Foundation,
  Fontisto,
  MaterialIcons
} from '@expo/vector-icons'

import { Input } from '../commons/Input'
import Button from '../commons/Button'

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

type LoginInfo = {
  username: string
  password: string
}

const Login = (props: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<LoginInfo>({
    defaultValues: {},
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  const onSubmit = (data: object) => console.log(data)

  return (
    <View style={styles.container}>
      {/* <>
        <Controller
          name='username'
          defaultValue=''
          control={control}
          rules={{
            required: { value: true, message: 'Name is required' }
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              icon={
                <AntDesign
                  name='user'
                  size={24}
                  color='rgba(255, 255, 255, 0.2)'
                />
              }
              labelStyle={styles.label}
              error={Boolean(errors?.username)}
              errorText={errors?.username?.message}
              onChangeText={(text) => onChange(text)}
              value={value}
              label='Username'
            />
          )}
        />
        <Controller
          name='password'
          defaultValue=''
          control={control}
          rules={{
            required: { value: true, message: 'Password is required' }
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              icon={
                <Entypo
                  name='lock'
                  size={24}
                  color='rgba(255, 255, 255, 0.2)'
                />
              }
              labelStyle={styles.label}
              error={Boolean(errors?.password)}
              errorText={errors?.password?.message}
              onChangeText={(text) => onChange(text)}
              value={value}
              label='Password'
              secureTextEntry={true}
            />
          )}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button onPress={handleSubmit(onSubmit)} title='Login' />
      </> */}
      <View style={styles.imageHolder}>
        <Image
          source={require('../../assets/images/dp.jpeg')}
          style={styles.image}
        />
      </View>

      <Text style={styles.name}>Anna Campbell</Text>
      <Text style={styles.email}>annacampbell@gmail.com</Text>
      <View style={styles.data}>
        <View style={styles.dataItem}>
          <Text style={styles.dataItemNo}>123</Text>
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
          <Text style={styles.dataItemNo}>06</Text>
          <Text style={styles.dataItemLabel}>MOVIES WATCHED</Text>
        </View>
      </View>
      <View style={styles.linkContainer}>
        {links.map((link) => (
          <TouchableOpacity
            key={link.id}
            style={styles.button}
            onPress={() => props.navigation.navigate(link.page)}
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
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
    marginTop: 25
  },
  label: {
    fontSize: 12,
    opacity: 0.5,
    textTransform: 'uppercase',
    lineHeight: 18,
    letterSpacing: 1.5
  },
  forgotPassword: {
    fontSize: 14,
    opacity: 0.5,
    textTransform: 'capitalize',
    lineHeight: 18,
    letterSpacing: 1.5,
    marginVertical: 20,
    color: '#fff',
    fontFamily: 'SF_Pro',
    textAlign: 'center'
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
