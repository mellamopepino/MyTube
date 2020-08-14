import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

import VideoElement from './VideoElement';
import Loading from '../generics/Loading';

const VideoList = (props) => {
  const {videos, onEndReached, onRefresh, refreshing, loading} = props;

  const renderVideo = (video) => {
    return (
      <VideoElement
        video={video.videoFiles.mp4}
        thumbnail={video.thumbnail}
        title={video.title}
        subtitle={video.subtitle}
      />
    );
  };

  if (!videos && loading) {
    return <Loading />;
  }

  if (!videos) {
    return null;
  }

  if (videos.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>No hay videos :(</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={videos}
      renderItem={({item}) => renderVideo(item)}
      keyExtractor={(item, index) => index.toString()}
      horizontal={false}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    color: 'grey',
    fontSize: 20,
  },
});

export default VideoList;
