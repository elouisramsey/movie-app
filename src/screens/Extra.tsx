import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from 'src/components/commons/Button'
import { Container } from 'src/components/commons/Container'
import Info from 'src/components/commons/Info'
import { COLORS } from 'src/Styles/styles'
import { decreaseExtra, addExtra } from 'store/Features/Ticket/ticketSlice'
import { totalPriceSelector, totalExtraPriceSelector, totalExtraQty } from 'store/Hooks/costCal'
import { useAppDispatch, useAppSelector } from 'store/Hooks/hooks'


interface ExtrasProps {
  navigation: any
}

const Extra: React.FC<ExtrasProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const totalPrice = useAppSelector(totalPriceSelector)
  const totalExtra = useAppSelector(totalExtraPriceSelector)
  const totalExtraItems = useAppSelector(totalExtraQty)
  const items = useAppSelector((state) => state.ticket.extras)

  return (
    <SafeAreaView style={{
      height: '100%'
    }}>
      <Info navigation={navigation}>{'Extra items'}</Info>
      <Container>
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
                disabled={item.quantity < 1}
                style={styles.btnHolder}
                onPress={() => {
                  dispatch(decreaseExtra(item))
                }}
              >
                <Text style={styles.sub}>-</Text>
              </TouchableOpacity>
              <View style={styles.counter}>
                <Text style={styles.counterText}>{item.quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.btnHolder}
                onPress={() => dispatch(addExtra(item))}
              >
                <Text style={styles.sub}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={[styles.item, { borderBottomColor: 'transparent' }]}>
          <Text style={styles.numberofItems}>
            {totalExtraItems} Items Selected
          </Text>
          <Text style={styles.amount}>${totalExtra}.00</Text>
        </View>
      </Container>
      <View style={styles.bottom}>
        <View>
          <Text style={styles.cost}>Total cost</Text>
          <Text style={styles.amount}>
            ${Number(totalExtra) + Number(totalPrice)}.00
          </Text>
        </View>
        <View style={{ width: '45%' }}>
          <Button
            title='Continue'
            onPress={() => navigation.navigate('Payment')}
          />
        </View>
      </View>
    </SafeAreaView>
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
    borderBottomColor: COLORS.grayed,
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
    backgroundColor: COLORS.grayed,
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
