import React from 'react'
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

import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../components/commons/Header'
import {
  Directions,
  FlingGestureHandler,
  State
} from 'react-native-gesture-handler'

const IMAGE_WIDTH = 100 * 0.86
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.5
const VISIBLE_ITEMS = 4

const data = [
  {
    id: 1,
    name: 'John Wick 3: Parabellum',
    cinema: 'Paragon Cinema',
    date: '24 May 2020',
    time: '10:00 AM - 11:20 AM',
    hall: 'C',
    row: 'E',
    seat: 'E4, E5',
    code: '3 1 1 7 7 0 1 3 2 0 6 3 7 5'
  },
  {
    id: 2,
    name: 'Princess Mononoke',
    cinema: 'Genesis Deluxe Cinema',
    date: '24 June 2020',
    time: '8:00 PM - 9:20 PM',
    hall: 'A',
    row: 'B',
    seat: 'B2, B3',
    code: '3 1 1 7 7 0 1 3 9 0 6 3 8 5'
  },
  {
    id: 11,
    name: 'John Wick 3: Parabellum',
    cinema: 'Paragon Cinema',
    date: '24 May 2020',
    time: '10:00 AM - 11:20 AM',
    hall: 'C',
    row: 'E',
    seat: 'E4, E5',
    code: '3 1 1 7 7 0 1 3 2 0 6 3 7 5'
  },
  {
    id: 12,
    name: 'Princess Mononoke',
    cinema: 'Genesis Deluxe Cinema',
    date: '24 June 2020',
    time: '8:00 PM - 9:20 PM',
    hall: 'A',
    row: 'B',
    seat: 'B2, B3',
    code: '3 1 1 7 7 0 1 3 9 0 6 3 8 5'
  },
  {
    id: 9,
    name: 'John Wick 3: Parabellum',
    cinema: 'Paragon Cinema',
    date: '24 May 2020',
    time: '10:00 AM - 11:20 AM',
    hall: 'C',
    row: 'E',
    seat: 'E4, E5',
    code: '3 1 1 7 7 0 1 3 2 0 6 3 7 5'
  },
  {
    id: 4,
    name: 'Princess Mononoke',
    cinema: 'Genesis Deluxe Cinema',
    date: '24 June 2020',
    time: '8:00 PM - 9:20 PM',
    hall: 'A',
    row: 'B',
    seat: 'B2, B3',
    code: '3 1 1 7 7 0 1 3 9 0 6 3 8 5'
  },
  {
    id: 7,
    name: 'John Wick 3: Parabellum',
    cinema: 'Paragon Cinema',
    date: '24 May 2020',
    time: '10:00 AM - 11:20 AM',
    hall: 'C',
    row: 'E',
    seat: 'E4, E5',
    code: '3 1 1 7 7 0 1 3 2 0 6 3 7 5'
  },
  {
    id: 6,
    name: 'Princess Mononoke',
    cinema: 'Genesis Deluxe Cinema',
    date: '24 June 2020',
    time: '8:00 PM - 9:20 PM',
    hall: 'A',
    row: 'B',
    seat: 'B2, B3',
    code: '3 1 1 7 7 0 1 3 9 0 6 3 8 5'
  }
]

const Tickets: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const animatedIndex = React.useRef(new Animated.Value(0)).current
  const reactiveAnimated = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.timing(animatedIndex, {
      toValue: reactiveAnimated,
      duration: 500,
      useNativeDriver: true
    }).start()
  }, [])

  const setActiveSlide = React.useCallback((newIndex) => {
    setActiveIndex(newIndex)
    reactiveAnimated.setValue(newIndex)
  })

  return (
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
        <SafeAreaView style={[styles.container]}>
          <Header title={'Tickets'} />
          <View style={[styles.spacer]} />
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
                        source={require('../assets/images/topCover.png')}
                        style={{ resizeMode: 'cover' }}
                      />
                    </View>
                    <View style={styles.details}>
                      <Text style={styles.title}>{item.name}</Text>
                      <View style={styles.descriptionHolder}>
                        <Text style={styles.header}>theatre</Text>
                        <Text style={styles.description}>{item.cinema}</Text>
                      </View>
                      <View style={styles.holder}>
                        <View style={styles.descriptionHolder}>
                          <Text style={styles.header}>date</Text>
                          <Text style={styles.description}>{item.date}</Text>
                        </View>
                        <View style={styles.descriptionHolder}>
                          <Text style={styles.header}>time</Text>
                          <Text style={styles.description}>{item.time}</Text>
                        </View>
                      </View>
                      <View style={styles.holder}>
                        <View style={[styles.holder, { width: '30%' }]}>
                          <View style={styles.descriptionHolder}>
                            <Text style={styles.header}>hall</Text>
                            <Text style={styles.description}>{item.hall} </Text>
                          </View>
                          <View style={styles.descriptionHolder}>
                            <Text style={styles.header}>row</Text>
                            <Text style={styles.description}>{item.row}</Text>
                          </View>
                        </View>

                        <View
                          style={[
                            styles.descriptionHolder,
                            { alignItems: 'flex-start', width: '30%' }
                          ]}
                        >
                          <Text style={styles.header}>seat</Text>
                          <Text style={styles.description}>{item.seat}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.barcode}>
                      <Image
                        source={require('../assets/images/barcode.png')}
                        style={{ resizeMode: 'cover' }}
                      />
                      <View style={[styles.holder, { width: '75%' }]}>
                        <Text style={styles.barcodeText}>par</Text>
                        <Text style={styles.barcodeText}>{item.code}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              )
            }}
          />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
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
    backgroundColor: '#2B3543',
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    height: 226
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
    lineHeight: 18
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
