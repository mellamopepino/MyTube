import React, { useContext, useState } from 'react';
import {
  View,
} from 'react-native';

import VideoList from '../../generics/VideoList';

import MainContext from '../MainContext'
import Header from '../../generics/Header'

const HomeScreen = () => {
  const { videos, fetchNextPage, refreshData, loading, refreshing } = useContext(MainContext)

  return (
    <View>
      <Header title="MyTube" />
      <VideoList
        videos={videos}
        onEndReached={fetchNextPage}
        onRefresh={refreshData}
        refreshing={refreshing}
        loading={loading}
      />
    </View>
  )
}

export default HomeScreen;
