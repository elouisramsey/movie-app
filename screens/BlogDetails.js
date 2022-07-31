import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Container } from '../components/commons/Container'
import Info from '../components/commons/Info'

function BlogDetails({ navigation }) {
  return (
    <Container>
      <Info share navigation={navigation}>
        {'Female action stars we...'}
      </Info>
      <View style={styles.Container}>
        <Image
          source={require('../assets/images/19.png')}
          style={styles.image}
        />
        <Text style={styles.time}>{'3 hours ago'}</Text>
        <Text style={styles.title}>
          Female action stars we cant wait to see
        </Text>
        <Text style={styles.content}>
          John Wick is now a marked man on the run in Manhattan. He is declared
          "excommunicado" by The High Table which places a $14 million contract
          bounty on his head as a result of Wick's unauthorized killing of High
          Table. {'\n'} {'\n'}
          At first, Wick travels to the New York Public Library and retrieves
          two concealed items–a "marker" (medallion) and a crucifix necklace.
          Wick leaves but is pursued by a gang into an antique warehouse which
          leads to a bloody fight between Wick and the gang involving antique
          weaponry.
        </Text>
        <Image
          source={require('../assets/images/26.png')}
          style={styles.image}
        />
        <Text style={styles.content}>
          The Adjudicator contacts Winston and offers to negotiate, eventually
          agreeing to allow Winston to remain at The Continental, but states
          Wick remains a problem. Winston betrays Wick, shooting him before Wick
          falls from the roof of the hotel. The Adjudicator leaves The
          Continental but notices Wick's body is gone.
        </Text>
      </View>
    </Container>
  )
}

export { BlogDetails }

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  image: {
    height: 170,
    width: '100%'
  },
  title: {
    fontSize: 16,
    fontFamily: 'SF_Pro',
    color: '#fff'
  },
  time: {
    fontSize: 14,
    color: '#fff',
    marginTop: 20,
    marginBottom: 4,
    opacity: 0.5,
    fontFamily: 'SF_Pro'
  },
  content: {
    fontSize: 14,
    opacity: 0.7,
    fontFamily: 'SF_Pro',
    marginVertical: 20,
    color: '#fff'
  }
})
