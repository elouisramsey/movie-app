import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import { Container } from '../components/commons/Container'
import Info from '../components/commons/Info'
import { Input } from '../components/commons/Input'
import Button from '../components/commons/Button'
import Success from '../components/commons/Success'

type Props = {
  navigation: any
}

type CardInfo = {
  cardNumber: number
  cardName: string
  cardExpiration: string
  cardCvv: number
}

const PaymentPage = (props: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<CardInfo>({
    defaultValues: {},
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  function insertSlash(val: string) {
    return val.replace(/^(\d{2})(\d{2})/, '$1/$2/')
  }

  const handleCarNumber = (val: string) => {
    const value = val
      .replace(/\s?/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
    return value
  }

  const onSubmit = (data: object) => console.log(data)

  return (
    <Container>
      {/* <View>
        <Info navigation={props.navigation}>{'Payment'}</Info>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.imageHolder}>
              <Image
                style={styles.image}
                source={require('../assets/images/payment.png')}
              />
            </View>
            <View style={styles.textHolder}>
              <Text style={styles.name}>John Wick 3: Parabellum</Text>
              <Text style={styles.subItems}>8:30 - 10:00 AM</Text>
              <Text style={styles.subItems}>Friday 24 may, 2019</Text>
              <Text style={styles.subItems}>Seat: E4, E5</Text>
            </View>
          </View>
          <View>
            <Controller
              name='cardName'
              defaultValue=''
              control={control}
              rules={{
                required: { value: true, message: 'Name is required' }
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  error={Boolean(errors?.cardName)}
                  errorText={errors?.cardName?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Name on Card'
                />
              )}
            />
            <Controller
              name='cardNumber'
              control={control}
              rules={{
                required: { value: true, message: 'Card Number is required' },
                min: { value: 16, message: 'Card Number is not valid' },
                max: {
                  value: 16,
                  message: 'Card Number should be up to 16 digits'
                }
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  error={Boolean(errors?.cardNumber)}
                  errorText={errors?.cardNumber?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Card Number'
                  keyboardType='numeric'
                  maxlength={16}
                />
              )}
            />
            <View style={styles.cardExpiration}>
              <View style={{ width: '50%' }}>
                <Controller
                  name='cardExpiration'
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Card Expiration is required'
                    },
                    max: { value: 5, message: 'Card Expiration is invalid' },
                    min: { value: 5, message: 'Card Expiration is invalid' }
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      error={Boolean(errors?.cardExpiration)}
                      errorText={errors?.cardExpiration?.message}
                      onChangeText={(text) => onChange(insertSlash(text))}
                      value={value}
                      label='Date Expires'
                      keyboardType='numeric'
                    />
                  )}
                />
              </View>
              <View style={{ width: '40%' }}>
                <Controller
                  name='cardCvv'
                  control={control}
                  rules={{
                    required: { value: true, message: 'Card CVV is required' },
                    min: { value: 3, message: 'Card CVV is invalid' },
                    max: { value: 3, message: 'Card CVV is invalid' }
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      error={Boolean(errors?.cardCvv)}
                      errorText={errors?.cardCvv?.message}
                      onChangeText={(text) => onChange(text)}
                      value={value}
                      label='CVV'
                      keyboardType='numeric'
                      maxlength={3}
                    />
                  )}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonHolder}>
          <View style={styles.cost}>
            <Text style={styles.costText}>total cost</Text>
            <Text style={styles.price}>$10.00</Text>
          </View>
          <Button onPress={handleSubmit(onSubmit)} title='Make payment' />
        </View>
      </View> */}
<Success navigation={props.navigation} />
    </Container>
  )
}

export { PaymentPage }

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    flex: 1
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#2B3543',
    borderRadius: 8,
    marginBottom: 25
  },
  imageHolder: {
    width: 80,
    height: 119,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  image: {
    // resizeMode: 'cover'
    borderRadius: 8
  },
  textHolder: {},
  name: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'SF_Pro',
    textTransform: 'capitalize'
  },
  subItems: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'SF_Pro',
    opacity: 0.5,
    marginBottom: 5,
    textTransform: 'capitalize'
  },
  cardExpiration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%'
  },
  buttonHolder: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    paddingHorizontal: 25
  },
  cost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2
  },
  costText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'SF_Pro',
    opacity: 0.5,
    textTransform: 'uppercase'
  },
  price: {
    fontSize: 24,
    color: '#FFC045',
    fontFamily: 'SF_Pro'
  }
})
