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

import TabNavigation from './components/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

import { HomeProvider } from './context/HomeContext'
import Header from './components/Header'

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header title="MyTube"/>
        <NavigationContainer>
          <HomeProvider>
            <TabNavigation/>
          </HomeProvider>
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
