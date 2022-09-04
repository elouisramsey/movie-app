import { View, Text, StyleSheet, Image,  } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import uuid from 'react-native-uuid'
import { API, Auth } from 'aws-amplify'

import { Input } from 'src/components/commons/Input'
import ParentContainer from 'src/components/commons/ParentContainer'
import ScrollContainer from 'src/components/commons/ScrollContainer'
import Success from 'src/components/commons/Success'
import { createTickets, updateUser } from 'src/graphql/mutations'
import { getUser } from 'src/graphql/queries'
import { totalPriceSelector, totalExtraPriceSelector, extrasSelected } from 'store/Hooks/costCal'
import { useAppSelector } from 'store/Hooks/hooks'
import Login from './Login'
import Button from 'src/components/commons/Button'



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
  const [cardExpiration, setCardExpiration] = useState('')

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

  const formatFunction = (cardExpiry = '') => {
    //expiryDate will be in the format MMYY, so don't make it smart just format according to these requirements, if the input has less than 2 character return it otherwise append `/` character between 2nd and 3rd letter of the input.
    if (cardExpiry.length < 2) {
      return cardExpiry
    } else {
      return cardExpiry.substring(0, 2) + '/' + (cardExpiry.substring(2) || '')
    }
  }

  const inputToValue = (inputText: any) => {
    //if the input has more than 5 characters don't set the state
    if (inputText.length < 6) {
      const tokens = inputText.split('/')
      // don't set the state if there is more than one "/" character in the given input
      if (tokens.length < 3) {
        const month = Number(tokens[1])
        const year = Number(tokens[2])
        //don't set the state if the first two letter is not a valid month
        if (month >= 1 && month <= 12) {
          let cardExpiry = month + ''
          //I used lodash for padding the month and year with  zero
          if (month > 1 || tokens.length === 2) {
            // user entered 2 for the month so pad it automatically or entered "1/" convert it to 01 automatically
            const t = month + ''
            cardExpiry = t.padStart(2, '0')
          }
          //disregard changes for invalid years
          if (year > 1 && year <= 99) {
            cardExpiry += year
          }
          setCardExpiration(cardExpiry)
        }
      }
    }
  }

  const createTicketonDb = async (setLoading: any) => {
    const isUserAvailable = await Auth.currentAuthenticatedUser()
    setLoading(true)
    try {
      const createTicket = (await API.graphql({
        query: createTickets,
        variables: {
          input: {
            id: uuid.v4().slice(0, 18),
            name: ticketInfo.movieName,
            date: ticketInfo.date,
            time: ticketInfo.time,
            theatre: ticketInfo.theatre,
            Image: ticketInfo.moviePoster,
            seat: ticketInfo.selectedSeat,
            reference: uuid.v4().slice(0, 7)
          }
        }
      })) as any

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
        const { Image, id, name, points, tickets, watched, email } =
          getUserFromDb.data.getUser
        const updateUserInfo = await API.graphql({
          query: updateUser,
          variables: {
            input: {
              id: isUserAvailable.attributes.sub,
              email: email,
              name: name,
              points: points + 3,
              watched: 0,
              Image: '',
              tickets:
                tickets === null
                  ? [createTicket.data?.createTickets.id]
                  : [...tickets, createTicket?.data.createTickets.id]
            }
          }
        })
        if (updateUserInfo) {
          setLoading(false)
          setShowModal(true)
          console.log(getUserFromDb.data.getUser)
        }
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const onSubmit = () => {
    createTicketonDb(setLoading)
  }

  return (
    <ParentContainer navigation={props.navigation} headerChildren={'Payment'}>
      {loggedInUser ? (
        <View style={{
          height: '100%'
        }}>
          <ScrollContainer>
              <View style={styles.card}>
                <Image
                  style={styles.imageHolder}
                  source={{
                    uri: poster
                  }}
                />

                <View style={styles.textHolder}>
                  <View style={{ flexDirection: 'row', width: '100%' }}>
                    <Text style={[styles.name]}>{movieName}</Text>
                  </View>
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
                          onChangeText={(text) => {
                            inputToValue(text)
                            // onChange(text)
                          }}
                          value={formatFunction(cardExpiration)}
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
     
          </ScrollContainer>

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
        </View>
      ) : (
        <Login navigateTopage={false} />
      )}
      <Success showModal={showModal} navigation={props.navigation} />
    </ParentContainer>
  )
}

export { PaymentPage }

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#2B3543',
    borderRadius: 8,
    marginBottom: 25,
    overflow: 'hidden'
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
    marginLeft: 20,
    width: '100%'
  },
  name: {
    fontSize: 12,
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
    paddingHorizontal: 25,
    backgroundColor: 'yellow',
    zIndex: 100
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
