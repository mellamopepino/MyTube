import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = (props) => {
  const { video } = props

  return (
    <View style={styles.videoContainer}>
      <Video
        source={{
          uri: video,
        }}
        style={styles.videoImage}
        resizeMode="contain"
        paused={true}
        controls={true}
        useTextureView={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  videoImage: {
    width: "100%",
    height: 200,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
  }
});

export default VideoPlayer;
