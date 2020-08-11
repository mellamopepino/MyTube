import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';

import VideoPlayer from './VideoPlayer';

const VideoList = (props) => {
  const { videos, onEndReached, onRefresh, refreshing } = props

  const renderVideo = (video) => {
    return (
      <View style={styles.videoContainer}>
        <VideoPlayer
          video={video.videoFiles.mp4}
        />
        <View styles={styles.videoText}>
          <Text style={styles.videoTitle}>{video.title}</Text>
          <Text style={styles.videoSubtitle}>{video.subtitle}</Text>
        </View>
      </View>
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

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 20,
  },
  videoText: {
    flex: 3,
  },
  videoTitle: {
    fontWeight: 'bold',
  },
  videoSubtitle: {
  }
});

export default VideoList;
