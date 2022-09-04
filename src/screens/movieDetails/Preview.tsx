import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import { Video } from 'expo-av'

import MoreInfo from 'src/components/commons/MoreInfo'

const data = [
  {
    id: 7,
    image: require('assets/images/2.png')
  },
  {
    id: 6,
    image: require('assets/images/3.png')
  },
  {
    id: 5,
    image: require('assets/images/2.png')
  },
  {
    id: 9,
    image: require('assets/images/3.png')
  },
  {
    id: 1,
    image: require('assets/images/1.png')
  },
  {
    id: 2,
    image: require('assets/images/2.png')
  },
  {
    id: 3,
    image: require('assets/images/3.png')
  }
]

const videos = [
  {
    id: 2,
    image: require('assets/images/5.png')
  },
  {
    id: 1,
    image: require('assets/images/8.png')
  },
  {
    id: 3,
    image: require('assets/images/7.png')
  }
]

const blogs = [
  {
    id: 1,
    time: '3 hours ago',
    topic: 'Female action stars we cant wait to see',
    image: require('assets/images/10.png')
  },
  {
    id: 2,
    time: '5 hours ago',
    topic: 'The best John Wick action scenes',
    image: require('assets/images/9.png')
  }
]

export default function Preview({ navigation }: { navigation: any }) {
  const video = React.useRef<any>(null)
  const [status, setStatus] = React.useState<any>({})

  return (
    <View>
      <MoreInfo
        label={'Photos'}
        onPress={() => navigation.navigate('Photos')}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 15 }}
        horizontal={true}
      >
        {data.map((item) => (
          <TouchableOpacity key={item.id} style={{ marginRight: 15 }}>
            <Image source={item.image} style={{ width: 104, height: 72 }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <MoreInfo
        label={'Videos'}
        onPress={() => navigation.navigate('Videos')}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 15 }}
        horizontal={true}
      >
        {videos.map((item) => (
          <View style={styles.videoContainer} key={item.id}>
            <Video
              ref={video}
              style={[styles.video, { zIndex: status.isPlaying ? 14 : -1 }]}
              source={require('assets/JW.mp4')}
              resizeMode='stretch'
              volume={1}
              // useNativeControls
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            <Image source={item.image} style={styles.imageContainer} />
            <TouchableOpacity
              onPress={() =>
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
              style={styles.play}
            >
              <Fontisto name='play' size={8} color='black' />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <MoreInfo
        label={'Blogs about this film'}
        onPress={() => navigation.navigate('Blog')}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 15 }}
        horizontal={true}
      >
        {blogs.map((blog) => (
          <TouchableOpacity
            key={blog.id}
            style={{ marginRight: 15, width: 173 }}
          >
            <Image source={blog.image} style={styles.blogImage} />
            <Text style={styles.blogTime}>{blog.time}</Text>
            <Text numberOfLines={3} style={styles.blogHeader}>
              {blog.topic}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  video: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%'
  },
  videoContainer: {
    width: 104,
    height: 72,
    marginRight: 15
  },
  imageContainer: {
    width: '100%',
    height: '100%'
  },
  play: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    backgroundColor: '#fff',
    zIndex: 11,
    position: 'absolute',
    bottom: 7,
    right: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blogImage: {
    height: 124
  },
  blogTime: {
    color: '#fff',
    opacity: 0.5,
    marginVertical: 10,
    fontSize: 12,
    fontFamily: 'SF_Pro'
  },
  blogHeader: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'SF_Pro'
  }
})
