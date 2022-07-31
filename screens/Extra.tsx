import React, { useEffect } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Button from '../components/commons/Button'
import { Container } from '../components/commons/Container'
import Info from '../components/commons/Info'

const items = [
  {
    id: 'coke',
    name: 'coca cola',
    price: 4,
    image: require('../assets/images/coke.png')
  },
  {
    id: 'pepsi',
    name: 'pepsi',
    price: 4,
    image: require('../assets/images/pepsi.png')
  },
  {
    id: 'sevenup',
    name: '7up',
    price: 3,
    image: require('../assets/images/7up.png')
  },
  {
    id: 'popcorn',
    name: 'popcorn',
    price: 5,
    image: require('../assets/images/popcorn.png')
  }
]

interface ExtrasProps {
  navigation: any
}

const Extra: React.FC<ExtrasProps> = ({ navigation }) => {
  const [counter, setCounter] = React.useState<any>({
    coke: 0,
    pepsi: 0,
    sevenup: 0,
    popcorn: 0
  })
  const [total, setTotal] = React.useState(0)
  const [totalPriceofItem, setTotalPriceofItem] = React.useState(0)
  const [testcount, setTestCount] = React.useState(0)

  const sumValues = (obj: Object) => Object.values(obj).reduce((a, b) => a + b)

  const handleIncrement = React.useCallback(
    (item: string): void => {
      setCounter({
        ...counter,
        [item]: counter[item] + 1
      })
    },
    [counter]
  )
  const handleDecrement = React.useCallback(
    (item: string): void => {
      setCounter({
        ...counter,
        [item]: counter[item] - 1
      })
    },
    [counter]
  )

  useEffect(() => {
    setTotal(sumValues(counter))
  }, [counter])

  return (
    <Container>
      <Info navigation={navigation}>{'Extra items'}</Info>
      <View style={styles.container}>
        {items.map((item) => (
          <View style={styles.item} key={item.id}>
            <View style={styles.items}>
              <Image style={styles.image} source={item.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price}.00</Text>
              </View>
            </View>
            <View style={styles.counterHolder}>
              <TouchableOpacity
                disabled={counter[item.id] === 0}
                style={styles.btnHolder}
                onPress={() => {
                 setTotalPriceofItem(totalPriceofItem - Number(item.price))
                  handleDecrement(item.id)
                }}
              >
                <Text style={styles.sub}>-</Text>
              </TouchableOpacity>
              <View style={styles.counter}>
                <Text style={styles.counterText}>{counter[item.id]}</Text>
              </View>
              <TouchableOpacity
                style={styles.btnHolder}
                onPress={() => {
                  setTotalPriceofItem(totalPriceofItem + Number(item.price))
                  handleIncrement(item.id)
                }}
              >
                <Text style={styles.sub}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={[styles.item, { borderBottomColor: 'transparent' }]}>
          <Text style={styles.numberofItems}>{total} Items Selected</Text>
          <Text style={styles.amount}>${totalPriceofItem}.00</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View>
          <Text style={styles.cost}>Total cost</Text>
          <Text style={styles.amount}>${totalPriceofItem}.00</Text>
        </View>
        <View style={{ width: '45%' }}>
          <Button
            title='Continue'
            onPress={() => navigation.navigate('Payment')}
          />
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#2B3543'
  },
  items: {
    flexDirection: 'row'
  },
  image: {
    width: 40,
    height: 52.5,
    resizeMode: 'contain',
    marginRight: 15
  },
  info: {},
  name: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
    fontFamily: 'SF_Pro',
    textTransform: 'capitalize'
  },
  price: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'SF_Pro',
    opacity: 0.5
  },
  btnHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#475363',
    borderWidth: 1,
    borderRadius: 4,
    height: 28,
    width: 28
  },
  sub: {
    fontSize: 18,
    color: '#47CFFF'
  },
  counterHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  counter: {
    height: 28,
    width: 64,
    borderRadius: 4,
    backgroundColor: '#2b3543',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  counterText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'SF_Pro'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#2B3543',
    paddingHorizontal: 25,
    paddingVertical: 5,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
  },
  cost: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'SF_Pro',
    opacity: 0.5,
    lineHeight: 20,
    textTransform: 'uppercase'
  },
  amount: {
    color: '#FFC045',
    fontSize: 24,
    fontFamily: 'SF_Pro'
  },
  numberofItems: {
    fontSize: 14,
    fontFamily: 'SF_Pro',
    color: '#fff',
    textTransform: 'uppercase',
    opacity: 0.5
  }
})

export { Extra }
