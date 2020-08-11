import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import VideoList from '../VideoList';

const Home = (props) => {
  const { videos } = props

  const getVideos = () => {
    console.log('get more!')
  }

  return (
    <View>
      <Text>videos</Text>
      <VideoList
        videos={videos}
        onEndReached={getVideos}
      />
    </View>
  )
}

export default Home;
