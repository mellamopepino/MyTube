import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

import VideoElement from './VideoElement';
import Loading from '../generics/Loading';

const VideoList = (props) => {
  const { videos, onEndReached, onRefresh, refreshing, loading } = props

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

  if(!videos && loading) {
    return <Loading />
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
