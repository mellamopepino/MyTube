import React from 'react';
import {StatusBar} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Video from 'react-native-video-controls';

const VideoScreen = (props) => {
  const route = useRoute();
  const {video} = route.params;

  return (
    <>
      <StatusBar translucent={true} hidden={true} />
      <Video
        source={{
          uri: video,
        }}
        resizeMode="contain"
        tapAnywhereToPause={true}
        useTextureView={false}
        disableFullscreen={true}
        disableVolume={true}
        disableBack={true}
      />
    </>
  );
};

export default VideoScreen;
