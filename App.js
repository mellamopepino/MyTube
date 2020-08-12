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

import AppNavigation from './components/AppNavigation';
import { HomeProvider } from './context/HomeContext'
import { darkAppColor } from './styles'

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar backgroundColor={darkAppColor}/>
      <SafeAreaView style={styles.container}>
        <HomeProvider>
          <AppNavigation/>
        </HomeProvider>
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
