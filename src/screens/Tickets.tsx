import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Directions,
  FlingGestureHandler,
  State
} from 'react-native-gesture-handler'

import { getTickets, getUser } from 'src/graphql/queries'
import { useAppDispatch, useAppSelector } from 'store/Hooks/hooks'
import Login from './Login'
import { Header } from 'src/components/commons/Header'
import { COLORS } from 'src/Styles/styles'
import LoadingIndicator from 'src/components/commons/LoadingIndicator'

const IMAGE_WIDTH = 100 * 0.86
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.5
const VISIBLE_ITEMS = 4

type Ticket = {
  Image: string
  date: string
  id: string
  name: string
  reference: string
  seat: string
  theatre: string
  time: string
}

const Tickets = ({ navigation }: { navigation: any }) => {
  const [activeIndex, setActiveIndex] = useState<any>(0)
  const animatedIndex = React.useRef(new Animated.Value(0)).current
  const reactiveAnimated = React.useRef(new Animated.Value(0)).current
  const [loading, setLoading] = useState<boolean>(false)

  const [randomHall, setRandomHall] = useState<string>('d')
  const [data, setData] = useState<Ticket[]>([])

  const loggedInUser = useAppSelector((state) => state.user.user)

  React.useEffect(() => {
    Animated.timing(animatedIndex, {
      toValue: reactiveAnimated,
      duration: 500,
      useNativeDriver: true
    }).start()

    getUserTickets()
    return () => {}
  }, [])

  useEffect(() => {
    getUserTickets()

    return () => {}
  }, [loggedInUser])

  const setActiveSlide = React.useCallback((newIndex: number) => {
    setActiveIndex(newIndex)
    reactiveAnimated.setValue(newIndex)
  }, [])

  const getUserTickets = async () => {
    if (!loggedInUser) return

    setLoading(true)
    const userTickets = [] as any

    const userInfo = (await API.graphql({
      query: getUser,
      variables: {
        id: loggedInUser?.id
      }
    })) as any
    const data = userInfo.data.getUser

    if (data) {
      let requests = data.tickets.map((item: any) => {
        return new Promise((resolve, reject) => {
          const t = API.graphql({
            query: getTickets,
            variables: {
              id: item
            }
          })
          if (t) resolve(t)
        })
      })

      Promise.all(requests)
        .then((body) => {
          body.forEach((res: any) => {
            if (res) userTickets.push(res.data.getTickets)
          })
        })
        .then(() => setData(userTickets))
        .then(() => setLoading(false))
        .catch((err) => {
          console.log({
            err162: err
          })
          setLoading(false)
        })
    }
  }

  return (
    <>
      {loggedInUser ? (
        <FlingGestureHandler
          key={'UP'}
          direction={Directions.UP}
          onHandlerStateChange={(ev) => {
            if (ev.nativeEvent.state === State.END) {
              // increment index
              if (activeIndex === data.length - 1) {
                return
              }
              setActiveSlide(activeIndex + 1)
            }
          }}
        >
          <FlingGestureHandler
            key='DOWN'
            direction={Directions.DOWN}
            onHandlerStateChange={(ev) => {
              if (ev.nativeEvent.state === State.END) {
                // increment index
                if (activeIndex === 0) {
                  return
                }
                setActiveSlide(activeIndex - 1)
              }
            }}
          >
            <SafeAreaView
              style={[styles.container]}
              removeClippedSubviews={true}
            >
              <Header title={'Tickets'} />
              <View style={[styles.spacer]} />
              {!loading && (
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.id.toString()}
                  scrollEnabled={false}
                  CellRendererComponent={({
                    index,
                    item,
                    children,
                    style,
                    ...props
                  }) => {
                    const newStyle = [
                      style,
                      {
                        zIndex: data.length - index,
                        left: -IMAGE_WIDTH / 2,
                        top: -IMAGE_HEIGHT / 2
                      }
                    ]
                    return (
                      <View index={index} {...props} style={newStyle}>
                        {children}
                      </View>
                    )
                  }}
                  contentContainerStyle={styles.content}
                  renderItem={({ item, index }) => {
                    const inputRange = [index - 1, index, index + 1]
                    const translateY = animatedIndex.interpolate({
                      inputRange,
                      outputRange: [-30, 0, 30]
                    })
                    const opacity = animatedIndex.interpolate({
                      inputRange,
                      outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0]
                    })

                    const scale = animatedIndex.interpolate({
                      inputRange,
                      outputRange: [0.92, 1, 0.9]
                    })

                    return (
                      <Animated.View
                        style={{
                          position: 'absolute',
                          opacity,
                          transform: [{ translateY }, { scale }]
                        }}
                      >
                        <TouchableOpacity style={styles.ticket}>
                          <View style={styles.image}>
                            <Image
                              style={{
                                width: '100%',
                                height: undefined,
                                aspectRatio: 1
                              }}
                              source={{
                                uri: item.Image
                              }}
                              resizeMode='cover'
                            />
                          </View>

                          <View style={styles.details}>
                            <Text style={styles.title}>{item.name}</Text>
                            <View style={styles.descriptionHolder}>
                              <Text style={styles.header}>theatre</Text>
                              <Text style={styles.description}>
                                {item.theatre}
                              </Text>
                            </View>
                            <View style={styles.holder}>
                              <View style={styles.descriptionHolder}>
                                <Text style={styles.header}>date</Text>
                                <Text style={styles.description}>
                                  {item.date}
                                </Text>
                              </View>
                              <View style={styles.descriptionHolder}>
                                <Text style={styles.header}>time</Text>
                                <Text style={styles.description}>
                                  {item.time}
                                </Text>
                              </View>
                            </View>
                            <View style={styles.holder}>
                              <View style={[styles.holder]}>
                                <View style={styles.descriptionHolder}>
                                  <Text style={styles.header}>hall</Text>
                                  <Text style={styles.description}>
                                    {randomHall}
                                  </Text>
                                </View>
                              </View>

                              <View
                                style={[
                                  styles.descriptionHolder,
                                  { alignItems: 'flex-start', width: '30%' }
                                ]}
                              >
                                <Text style={styles.header}>seat</Text>
                                <Text style={styles.description}>
                                  {item.seat}
                                </Text>
                              </View>
                            </View>
                          </View>
                          <View style={styles.barcode}>
                            <Image
                              source={require('assets/images/barcode.png')}
                              resizeMode='contain'
                            />
                            <View style={[styles.holder, { width: '75%' }]}>
                              <Text style={styles.barcodeText}>par</Text>
                              <Text style={styles.barcodeText}>
                                {item.id.length === 3
                                  ? item.id + 67890395059690
                                  : item.id}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </Animated.View>
                    )
                  }}
                />
              )}
              <LoadingIndicator loading={loading} />
            </SafeAreaView>
          </FlingGestureHandler>
        </FlingGestureHandler>
      ) : (
        <Login navigateTopage={false} navigation={navigation} />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width
  },
  content: {
    flex: 1,
    width: 324,
    marginVertical: 80,
    marginHorizontal: 80
  },
  ticket: {
    height: 550,
    backgroundColor: COLORS.grayed,
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    height: 226,
    width: '100%',
    overflow: 'hidden'
  },
  details: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    height: 226
  },
  title: {
    fontSize: 18,
    fontFamily: 'SF_Pro',
    color: '#fff',
    lineHeight: 18,
    marginBottom: 20,
    fontWeight: '800'
  },
  descriptionHolder: {
    marginBottom: 20
  },
  description: {
    fontSize: 14,
    fontFamily: 'SF_Pro',
    color: '#fff',
    lineHeight: 18,
    textTransform: 'uppercase'
  },
  header: {
    fontSize: 12,
    fontFamily: 'SF_Pro',
    color: '#fff',
    opacity: 0.5,
    textTransform: 'uppercase',
    lineHeight: 18,
    marginBottom: 5
  },
  holder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  barcode: {
    height: 98,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  barcodeText: {
    fontSize: 14,
    fontFamily: 'SF_Pro',
    color: '#0F1B2B',
    lineHeight: 18,
    textTransform: 'uppercase',
    marginTop: 5
  },
  spacer: {
    marginVertical: 20
  }
})

export default Tickets
