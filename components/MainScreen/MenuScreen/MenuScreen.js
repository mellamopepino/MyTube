import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VideoListMenu from './VideoListMenu'
import ListsMenu from './ListsMenu'
import Header from '../../generics/Header'

const Stack = createStackNavigator();

const MenuScreen = () => {

  const renderHeader = ({ scene, previous, navigation }) => {
    const { options } = scene.descriptor;
    const title =
      options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
        ? options.title
        : scene.route.name;

    return (
      <Header
        title={title}
        buttonIcon={previous && "chevron-left"}
        onPress={previous && navigation.goBack}
      />
    )
  }

  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: renderHeader
      }}
    >
      <Stack.Screen
        name="Listas"
        component={ListsMenu}
      />
      <Stack.Screen
        name="Videos"
        component={VideoListMenu}
        options={({route}) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}

export default MenuScreen;
