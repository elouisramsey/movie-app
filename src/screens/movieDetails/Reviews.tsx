import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList
} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import Dateformatter from 'src/components/commons/DateFormatter'
import Info from 'src/components/commons/Info'
import Segment from 'src/components/commons/Segment'
import { api, key } from 'store/Features/Movies/movieSlice'
import { COLORS } from 'src/Styles/styles'



type Props = {
  navigation: any
  tabIndex: number
  changeView: (index: number) => void
  tabs: any
  movie: string
  title: string
}

export default function Reviews({
  navigation,
  tabIndex,
  changeView,
  tabs,
  movie,
  title
}: Props) {
  const [reviews, setReviews] = React.useState([]) as any

  const getReview = async () => {
    api
      .get(`movie/${movie}/reviews?api_key=${key}&language=en-US`)
      .then((res) => {
        setReviews(res.data.results)
      })
      .catch((err) => console.log(err))
  }

  React.useEffect(() => {
    getReview()
  }, [])

  return (
    <SafeAreaView>
      <Info navigation={navigation} share>
        {title}
      </Info>

      <View>
        <Segment tabs={tabs} currentIndex={tabIndex} onChange={changeView} />
      </View>
      <View style={styles.ratingContainer}>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>4.6/5</Text>
          <View style={styles.ratings}>
            <MaterialIcons name='star' size={30} color='#ffc045' />
            <MaterialIcons name='star' size={30} color='#ffc045' />
            <MaterialIcons name='star' size={30} color='#ffc045' />
            <MaterialIcons name='star' size={30} color='#ffc045' />
            <MaterialIcons name='star' size={30} color='#ffc045' />
          </View>
        </View>
        <Text style={styles.numberofRatings}>{reviews.length} reviews</Text>
      </View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <View style={styles.commentHolder} key={item.id}>
            <View style={styles.commentContainer}>
              <View style={styles.ratings}>
                <MaterialIcons name='star' size={20} color='#ffc045' />
                <MaterialIcons name='star' size={20} color='#ffc045' />
                <MaterialIcons name='star' size={20} color='#ffc045' />
                <MaterialIcons name='star' size={20} color='#ffc045' />
                <MaterialIcons name='star' size={20} color='#ffc045' />
              </View>
              <Text style={styles.comment}>{item.content}</Text>
            </View>
            <View style={styles.arrow}>
              <MaterialIcons name='arrow-drop-down' size={80} color={COLORS.grayed }/>
            </View>
            <View style={styles.commenter}>
              <Image
                object-fit='cover'
                style={styles.imgHolder}
                source={{
                  uri: item?.author_details.avatar_path?.substring(1)
                }}
              />

              <View style={styles.commenterInfo}>
                <Text style={styles.commenterName}>{item.author}</Text>

                <Dateformatter
                  date={item.created_at}
                  textStyle={styles.commenterDate}
                />
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  ratingContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%'
  },
  ratingText: {
    fontFamily: 'SF_Pro',
    fontSize: 30,
    color: '#fff',
    marginRight: 10
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  numberofRatings: {
    color: '#fff',
    fontFamily: 'SF_Pro',
    fontSize: 22,
    opacity: 0.5,
    marginBottom: 10
  },
  commentHolder: {
    marginHorizontal: 15,
    marginVertical: 15
  },
  commentContainer: {
    width: '100%',
    backgroundColor: '#2b3543',
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 15,
    position: 'relative',
    zIndex: 1
  },
  comment: {
    color: '#fff',
    fontFamily: 'SF_Pro',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 15
  },
  arrow: {
    marginTop: -35
  },
  commenter: {
    flexDirection: 'row',
    marginTop: -15,
    marginLeft: 25
  },
  imgHolder: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    resizeMode: 'contain',
    overflow: 'hidden'
  },
  commenterInfo: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  commenterName: {
    fontFamily: 'SF_Pro',
    fontSize: 14,
    color: '#fff',
    marginBottom: 5
  },
  commenterDate: {
    fontFamily: 'SF_Pro',
    fontSize: 12,
    color: '#fff',
    opacity: 0.5
  }
})
