import { View, Text } from 'react-native'
import React from 'react'
import { Container } from '../components/commons/Container'
import { Header } from '../components/commons/Header'
import Login from '../components/others/Login'

type Props = {
    navigation: any
}

const Profile = (props: Props) => {
  return (
    <Container>
      <Header title={'Profile'} link={'Sign Up'} />
      <Login navigation={props.navigation} />
    </Container>
  )
}

export  {Profile}