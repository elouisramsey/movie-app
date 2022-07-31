import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Video, AVPlaybackStatus } from 'expo-av'
import { Fontisto } from '@expo/vector-icons'

import Info from '../components/commons/Info'

const data = [
  {
    id: 1,
    image: require('../assets/images/24.png'),
    duration: '2:13'
  },
  {
    id: 2,
    image: require('../assets/images/25.png'),
    duration: '2:13'
  },
  {
    id: 3,
    image: require('../assets/images/22.png'),
    duration: '2:00'
  }
]

export default function Videos({ navigation }) {
  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})
  return (
    <ScrollView>
      <SafeAreaView>
        <Info navigation={navigation}>{'Videos'}</Info>
        <View style={{ paddingHorizontal: 15 }}>
          {data.map((item) => (
            <View style={styles.videoContainer} key={item.id}>
              <Video
                ref={video}
                style={[styles.video, { zIndex: status.isPlaying ? 14 : -1 }]}
                source={require('../assets/JW.mp4')}
                resizeMode='stretch'
                volume={1}
                useNativeControls
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
              <Image source={item.image} style={styles.imageContainer} />
              <View style={styles.time}>
                <Text style={styles.duration}>{item.duration}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  status.isPlaying
                    ? video.current.pauseAsync()
                    : video.current.playAsync()
                }
                style={styles.play}
              >
                <Fontisto name='play' size={12} color='black' />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  videoContainer: {
    width: '100%',
    height: 226,
    overflow: 'hidden',
    marginVertical: 15
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  imageContainer: {
    width: '100%',
    height: '100%'
  },
  play: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: '#fff',
    zIndex: 11,
    position: 'absolute',
    bottom: 15,
    right: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    height: 24,
    width: 48,
    backgroundColor: '#0F1B2B',
    borderRadius: 4,
    position: 'absolute',
    bottom: 15,
    left: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  duration: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'SF_Pro'
  }
})
