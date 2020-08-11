import React, { useContext } from 'react';
import {
  View,
  Text,
} from 'react-native';

import VideoList from '../VideoList';

import HomeContext from '../../context/HomeContext'

const Home = () => {
  const { videos } = useContext(HomeContext)

  const getVideos = () => {
    console.log('get more!')
  }

  return (
    <View>
      <VideoList
        videos={videos}
        onEndReached={getVideos}
      />
    </View>
  )
}

export default Home;
