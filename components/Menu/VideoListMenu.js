import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { homeSuccessWithMore } from '../../mocks'

import VideoList from '../VideoList'

const VideoListMenu = (props) => {
  const { route } = props
  const [ videos, setVideos ] = useState(homeSuccessWithMore.items)

  return (
    <VideoList
      videos={videos}
    />
  )
}

const styles = StyleSheet.create({});

export default VideoListMenu;
