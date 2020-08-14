import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {appColor} from '../../styles';

const Loading = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={appColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    alignItems: 'center',
  },
});

export default Loading;
