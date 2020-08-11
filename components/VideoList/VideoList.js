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
  const { videos, onEndReached } = props

  const renderVideo = (video) => {
    // TODO: agregar date.
    console.log('data', video.publishedDate, new Date(video.publishedDate).toString())
    return (
      <View key={video.id} style={styles.videoContainer}>
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
      keyExtractor={item => item.id}
      horizontal={false}
      onEndReached={onEndReached}
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
