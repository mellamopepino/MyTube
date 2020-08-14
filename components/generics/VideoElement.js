import React from 'react';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Image} from 'react-native';

const VideoElement = (props) => {
  const {video, thumbnail, title, subtitle} = props;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('VideoScreen', {video});
  };

  const getImageElement = () => {
    return <Image source={{uri: thumbnail}} style={styles.video} />;
  };

  return (
    <ListItem
      leftElement={getImageElement()}
      title={title}
      subtitle={subtitle}
      onPress={handlePress}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    width: 130,
    height: 80,
  },
});

export default VideoElement;
