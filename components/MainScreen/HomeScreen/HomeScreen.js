import React, { useContext, useState } from 'react';
import {
  View,
} from 'react-native';

import VideoList from '../../generics/VideoList';

import MainContext from '../MainContext'
import Header from '../../generics/Header'

const HomeScreen = () => {
  const [ refreshing, setRefreshing ] = useState(false)
  const { videos, fetchNextPage, refreshData } = useContext(MainContext)

  const handleRefresh = async () => {
    setRefreshing(true)
    await refreshData()
    setRefreshing(false)
  }

  return (
    <View>
      <Header title="MyTube" />
      <VideoList
        videos={videos}
        onEndReached={fetchNextPage}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />
    </View>
  )
}

export default HomeScreen;
