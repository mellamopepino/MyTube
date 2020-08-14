import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import VideoList from '../../generics/VideoList';

import MainContext from '../MainContext';
import Header from '../../generics/Header';

const HomeScreen = () => {
  const {videos, fetchNextPage, refreshData, loading, refreshing} = useContext(
    MainContext,
  );

  return (
    <View style={styles.container}>
      <Header title="MyTube" />
      <VideoList
        videos={videos}
        onEndReached={fetchNextPage}
        onRefresh={refreshData}
        refreshing={refreshing}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
