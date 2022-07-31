import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Entypo } from '@expo/vector-icons'

import { Container } from '../components/commons/Container'
import Info from '../components/commons/Info'
import { Input } from '../components/commons/Input'
import Button from '../components/commons/Button'

type Props = {
  navigation: any
}

type ResetInfo = {
  password: string
  resetPassword: string
  confirmPassword: string
}

const ResetPassword = (props: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<ResetInfo>({
    defaultValues: {},
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  const onSubmit = (data: object) => console.log(data)
  return (
    <Container>
      <Info navigation={props.navigation}>{'Change Password'}</Info>
      <View style={styles.container}>
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
              label='Current Password'
              secureTextEntry={true}
            />
          )}
        />
        <Controller
          name='resetPassword'
          defaultValue=''
          control={control}
          rules={{
            required: { value: true, message: 'New password is required' }
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
              error={Boolean(errors?.resetPassword)}
              errorText={errors?.resetPassword?.message}
              onChangeText={(text) => onChange(text)}
              value={value}
              label='New Password'
              secureTextEntry={true}
            />
          )}
        />
        <Controller
          name='confirmPassword'
          defaultValue=''
          control={control}
          rules={{
            required: { value: true, message: 'Confirm password is required' },
            validate: (value: string) => {
              return (
                value === formState.values.resetPassword ||
                'Passwords do not match'
              )
            }
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
              error={Boolean(errors?.confirmPassword)}
              errorText={errors?.confirmPassword?.message}
              onChangeText={(text) => onChange(text)}
              value={value}
              label='Confirm Password'
              secureTextEntry={true}
            />
          )}
        />
        <Button onPress={handleSubmit(onSubmit)} title='Reset Password' />
      </View>
    </Container>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  label: {
    fontSize: 12,
    opacity: 0.5,
    textTransform: 'uppercase',
    lineHeight: 18,
    letterSpacing: 1.5
  }
})
