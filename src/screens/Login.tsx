import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { AntDesign, Entypo } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'
import { API, Auth } from 'aws-amplify'

import { Input } from 'src/components/commons/Input'
import { getUser } from 'src/graphql/queries'
import { useAppDispatch } from 'store/Hooks/hooks'
import { setUser } from 'store/User/UserSlice'
import Button from 'src/components/commons/Button'



type Props = {
  navigation?: any
  navigateTopage: boolean
}

type LoginInfo = {
  username: string
  password: string
}

const Login = ({ navigation, navigateTopage }: Props) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
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

  // Louisezzimchidera ==> login username, @@88Abbaa ==> login password

  const onSubmit = ({
    username,
    password
  }: {
    username: string
    password: string
  }) => {
    setLoading(true)
    Auth.signIn(username, password)
      .then(async (user) => {
        const getUserFromDb = (await API.graphql({
          query: getUser,
          variables: {
            id: user.attributes.sub
          }
        })) as any
        const data = getUserFromDb.data.getUser
        dispatch(setUser(data))
        setLoading(false)
        navigateTopage && navigation.navigate('Profile')
      })
      .catch((err) => {
        setLoading(false)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err.message
        })
       
      })
  }

  return (
    <View style={AuthStyles.container}>
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
            labelStyle={AuthStyles.label}
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
              <Entypo name='lock' size={24} color='rgba(255, 255, 255, 0.2)' />
            }
            containerStyle={AuthStyles.inputContainer}
            labelStyle={AuthStyles.label}
            error={Boolean(errors?.password)}
            errorText={errors?.password?.message}
            onChangeText={(text) => onChange(text)}
            value={value}
            label='Password'
            secureTextEntry={true}
          />
        )}
      />
      <View style={AuthStyles.btnHolder}>
        <TouchableOpacity>
          <Text style={AuthStyles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text
            style={[
              AuthStyles.forgotPassword,
              {
                color: 'gray'
              }
            ]}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={handleSubmit(onSubmit)}
        title='Login'
        loading={loading}
      />
    </View>
  )
}

export default Login

export const AuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
    marginTop: 25
  },
  inputContainer: {
    marginBottom: 5
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
    color: '#fff',
    fontFamily: 'SF_Pro'
  },
  btnHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 25
  }
})
