import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import { Container } from '../components/commons/Container'
import Info from '../components/commons/Info'
import { Input } from '../components/commons/Input'
import Button from '../components/commons/Button'
import Success from '../components/commons/Success'
import {
  totalPriceSelector,
  totalExtraPriceSelector,
  extrasSelected
} from '../store/Hooks/costCal'
import { useAppSelector } from '../store/Hooks/hooks'
import Login from './Login'
import { API, Auth } from 'aws-amplify'
import { createTickets, updateUser } from '../src/graphql/mutations'
import { getUser } from '../src/graphql/queries'

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
  const loggedInUser = useAppSelector((state) => state.user.user)
  const ticketInfo = useAppSelector((state) => state.cinema)
  const poster = useAppSelector((state) => state.cinema.moviePoster)
  const [loading, setLoading] = React.useState(false)
  const totalPrice = useAppSelector(totalPriceSelector)
  const totalExtra = useAppSelector(totalExtraPriceSelector)
  const extras = useAppSelector(extrasSelected)
  const selectedInfo = useAppSelector((state) => state.cinema)
  const { date, time, theatre, movieName, resolution, selectedSeat } =
    selectedInfo

  const [showModal, setShowModal] = React.useState(false)
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<CardInfo>({
    defaultValues: {},
    mode: 'onChange',
    reValidateMode: 'onChange'
  })

  function insertSlash(val: string) {
    return val.replace(/^(\d{2})(\d{2})/, '$1/$2/')
  }

  const handleCardNumber = (val: string) => {
    const value = val
      .replace(/\s?/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
    return value
  }

  const createTicketonDb = async () => {
    const isUserAvailable = await Auth.currentAuthenticatedUser()

    try {
      const createTicket = await API.graphql({
        query: createTickets,
        variables: {
          input: {
            id: isUserAvailable.attributes.sub,
            name: ticketInfo.movieName,
            date: ticketInfo.date,
            time: ticketInfo.time,
            theatre: ticketInfo.theatre,
            Image: ticketInfo.moviePoster,
            seat: ticketInfo.selectedSeat,
            reference: new Date().getTime() + Math.random(),
            extras: JSON.stringify(extras),
          }
        }
      })

      const getUserFromDb = (await API.graphql({
        query: getUser,
        variables: {
          id: isUserAvailable.attributes.sub
        }
      })) as any
      // const updatePoints = await API.graphql({
      //   query: updateUser,
      //   variables: {
      //     input: {
      //       id: isUserAvailable.attributes.sub,
      //       points:   10
      //     }
      //   }
        
      // })

      if (createTicket) {
        console.log(getUserFromDb)
      }
      console.log(createTicket)
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = (data: object) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      createTicketonDb()
      // setShowModal(true)
    }, 2000)
  }

  return (
    <View
      style={{
        paddingVertical: 35,
        flex: 1
      }}
    >
      <Info navigation={props.navigation}>{'Payment'}</Info>
      {loggedInUser ? (
        <>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.card}>
                <Image
                  style={styles.imageHolder}
                  source={{
                    uri: poster
                  }}
                />

                <View style={styles.textHolder}>
                  <Text style={styles.name}>{movieName}</Text>
                  <Text style={styles.subItems}>{time}</Text>
                  <Text style={styles.subItems}>{date}</Text>
                  <Text style={styles.subItems}>Seat: {selectedSeat}</Text>
                  <Text style={styles.subItems}>Theatre: {theatre}</Text>
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
                    required: {
                      value: true,
                      message: 'Card Number is required'
                    },
                    minLength: {
                      value: 16,
                      message: 'Card Number is not valid'
                    },
                    maxLength: {
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
                        maxLength: {
                          value: 4,
                          message: 'Card Expiration is invalid'
                        },
                        minLength: {
                          value: 4,
                          message: 'Card Expiration is invalid'
                        }
                      }}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          error={Boolean(errors?.cardExpiration)}
                          errorText={errors?.cardExpiration?.message}
                          onChangeText={(text) => onChange(text)}
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
                        required: {
                          value: true,
                          message: 'Card CVV is required'
                        },
                        minLength: {
                          value: 3,
                          message: 'Card CVV should be up to 3'
                        },
                        maxLength: { value: 3, message: 'Card CVV is invalid' }
                      }}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          error={Boolean(errors?.cardCvv)}
                          errorText={errors?.cardCvv?.message}
                          onChangeText={(text) => onChange(+text)}
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
          </ScrollView>

          <View style={styles.buttonHolder}>
            <View style={styles.cost}>
              <Text style={styles.costText}>total cost</Text>
              <Text style={styles.price}>
                ${Number(totalExtra) + Number(totalPrice)}.00
              </Text>
            </View>
            <Button
              loading={loading}
              onPress={handleSubmit(onSubmit)}
              title='Make payment'
            />
          </View>
        </>
      ) : (
        <Login navigateTopage={false} />
      )}
      <Success showModal={showModal} navigation={props.navigation} />
    </View>
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
  textHolder: {
    marginLeft: 20
  },
  name: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'SF_Pro',
    textTransform: 'capitalize'
  },
  subItems: {
    fontSize: 12,
    lineHeight: 15,
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
