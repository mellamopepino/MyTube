import React, { useContext, useState } from 'react';
import {
  View,
} from 'react-native';

import VideoList from '../VideoList';

import HomeContext from '../../context/HomeContext'

const Home = () => {
  const [ refreshing, setRefreshing ] = useState(false)
  const { videos, fetchNextPage, refreshData } = useContext(HomeContext)

  const handleRefresh = async () => {
    setRefreshing(true)
    await refreshData()
    setRefreshing(false)
  }

  return (
    <View>
      <VideoList
        videos={videos}
        onEndReached={fetchNextPage}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />
    </View>
  )
}

export default Home;
