/**
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { darkAppColor } from './styles'

import MainScreen from './components/MainScreen'
import VideoScreen from './components/VideoScreen'

const Stack = createStackNavigator();

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar backgroundColor={darkAppColor}/>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled:true,
              gestureResponseDistance: {
                horizontal: 150,
              },
              ...TransitionPresets.SlideFromRightIOS,
            }}
          >
            <Stack.Screen
              name="Main"
              component={MainScreen}
            />
            <Stack.Screen
              name="VideoScreen"
              component={VideoScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
