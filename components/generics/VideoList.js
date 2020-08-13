import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

import VideoElement from './VideoElement';

const VideoList = (props) => {
  const { videos, onEndReached, onRefresh, refreshing } = props

  const renderVideo = (video) => {
    return (
      <VideoElement
        video={video.videoFiles.mp4}
        thumbnail={video.thumbnail}
        title={video.title}
        subtitle={video.subtitle}
      />
    )
  }

  return (
    <FlatList
      data={videos}
      renderItem={({item}) => renderVideo(item)}
      keyExtractor={(item, index) => index}
      horizontal={false}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  )
}

const styles = StyleSheet.create({});

export default VideoList;
