import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Cast from 'src/components/commons/Cast'
import MoreInfo from 'src/components/commons/MoreInfo'
import Segment from 'src/components/commons/Segment'
import TextDescription from 'src/components/commons/TextDescription'
import Preview from './Preview'

type Props = {
  navigation: any
  tabIndex: number
  changeView: (index: number) => void
  tabs: any
  synopsis: string
  actors: any
}

export default function Details({
  navigation,
  tabIndex,
  changeView,
  tabs,
  synopsis,
  actors
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Segment tabs={tabs} currentIndex={tabIndex} onChange={changeView} />
      </View>
      <Text style={styles.title}>Synopsis</Text>
      <TextDescription text={synopsis} />
      <MoreInfo
        label={'Cast & Crew'}
        onPress={() => navigation.navigate('CastAndCrew', { actors })}
      />
      {actors?.cast?.slice(0, 4).map((item: any) => (
        <Cast key={item.id} {...item} />
      ))}
      <Preview navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  tabContainer: {
    marginVertical: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#FFFFFF',
    fontFamily: 'SF_Pro'
  }
})
