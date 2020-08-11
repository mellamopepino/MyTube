import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import VideoListMenu from './VideoListMenu'
import ListsMenu from './ListsMenu'

enableScreens();
const Stack = createNativeStackNavigator();

const Menu = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lists"
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

export default Menu;
