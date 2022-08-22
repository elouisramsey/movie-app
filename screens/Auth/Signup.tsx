
import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { API, Auth, Hub } from 'aws-amplify'
import { AuthStyles } from '../Login'
import { Input } from '../../components/commons/Input'
import Button from '../../components/commons/Button'
import { createUser } from '../../src/graphql/mutations'

type Props = {
  navigation?: any
}

type SignupInfo = {
  username: string
  password: string
  email: string
  name: string
  code?: string
}

const Signup = ({ navigation }: Props) => {
  const [confirmsignup, setConfirmSignup] = React.useState(false)
  const [authCode, setAuthCode] = React.useState('')
  const [username, setUser] = React.useState('')
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<SignupInfo>({
    defaultValues: {},
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  const onSubmit = async ({
    username,
    password,
    email,
    name
  }: {
    username: string
    password: string
    email: string
    name: string
  }) => {
    Auth.signUp({
      username,
      password,
      attributes: {
        email: email,
        name
      }
    })
      .then(async (user) => {
        const createUserOnDB = (await API.graphql({
          query: createUser,
          variables: {
            input: {
              id: user.userSub,
              email: email,
              name: name,
              points: 0,
              watched: 0,
              Image: ''
            }
          }
        })) as any
        if (createUserOnDB.data.createUser) {
            setConfirmSignup(true)
        } else {
          console.log(createUserOnDB.errors)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <View style={AuthStyles.container}>
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          marginTop: 45
        }}
      >
        {confirmsignup ? (
          <View
            style={{
              width: '100%'
            }}
          >
            <Input
              labelStyle={AuthStyles.label}
              error={Boolean(errors?.code)}
              errorText={errors?.code?.message}
              onChangeText={(text) => setAuthCode(text)}
              value={authCode}
              label='Confirmation Code'
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={[
                  AuthStyles.forgotPassword,
                  {
                    color: 'gray'
                  }
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
            <Button
              onPress={async () => {
                try {
                  await Auth.confirmSignUp(username, authCode)
                } catch (error) {
                  console.log(error)
                }
              }}
              title='Signup'
            />
          </View>
        ) : (
          <>
            <Controller
              name='username'
              defaultValue=''
              control={control}
              rules={{
                required: { value: true, message: 'Name is required' }
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  labelStyle={AuthStyles.label}
                  error={Boolean(errors?.username)}
                  errorText={errors?.username?.message}
                  onChangeText={(text) => {
                    setUser(text)
                    onChange(text)
                  }}
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
                  secureTextEntry={true}
                  labelStyle={AuthStyles.label}
                  error={Boolean(errors?.password)}
                  errorText={errors?.password?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Password'
                />
              )}
            />
            <Controller
              name='email'
              defaultValue=''
              control={control}
              rules={{
                required: { value: true, message: 'Email is required' }
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  labelStyle={AuthStyles.label}
                  error={Boolean(errors?.email)}
                  errorText={errors?.email?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Email'
                />
              )}
            />
            <Controller
              name='name'
              defaultValue=''
              control={control}
              rules={{
                required: { value: true, message: 'Name is required' }
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  labelStyle={AuthStyles.label}
                  error={Boolean(errors?.name)}
                  errorText={errors?.name?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Name'
                />
              )}
            />
            <View
              style={[
                AuthStyles.btnHolder,
                {
                  justifyContent: 'flex-end'
                }
              ]}
            >
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text
                  style={[
                    AuthStyles.forgotPassword,
                    {
                      color: 'gray'
                    }
                  ]}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Button
                width='100%'
                onPress={handleSubmit(onSubmit)}
                title='Signup'
              />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})
