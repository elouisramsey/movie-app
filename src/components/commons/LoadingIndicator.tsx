import React from 'react'
import { View, ActivityIndicator, StyleSheet, Modal, Text } from 'react-native'

type Props = {
  loading: boolean
  activityIndicatorWrapper?: object
  information?: string
}

const LoadingIndicator = ({
  loading,
  activityIndicatorWrapper,
  information
}: Props) => {
  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <View style={styles.modalBackground}>
        <View
          style={[styles.activityIndicatorWrapper, activityIndicatorWrapper]}
        >
          <ActivityIndicator
            color='#2b3543'
            hidesWhenStopped={true}
            animating={loading}
            size='large'
          />
          {information && <Text style={styles.information}>{information}</Text>}
        </View>
      </View>
    </Modal>
  )
}

export default LoadingIndicator

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#000000'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  information: {
    fontSize: 13,
    color: '#3F3D56',
    lineHeight: 20,
    fontWeight: '400',
    marginTop: 10,
    fontFamily: 'SF_Pro'
  }
})
