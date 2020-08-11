import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

import Home from '../Home';
import ListsMenu from '../ListsMenu';

import {
  homeSuccessWithMore,
} from '../../mocks';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (

    <Tab.Navigator
      initialRouteName={"Home"}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={() => {
          return <Home videos={homeSuccessWithMore.items}/>
        }}
        options={{
          tabBarIcon: ({color, size}) => (
              <Icon
                type="font-awesome"
                name="home"
                color={color}
                size={size}
              />
            ),
          tabBarAccessibilityLabel: "Home"
        }}
      />
      <Tab.Screen
        name="Lists"
        component={() => {
          return <ListsMenu lists={homeSuccessWithMore.listasPrincipales}/>
        }}
        options={{
          tabBarIcon: ({color, size}) => (
              <Icon
                type="font-awesome"
                name="list"
                color={color}
                size={size}
              />
            ),
          tabBarAccessibilityLabel: "Lists"
        }}
      />
    </Tab.Navigator>
    
        
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TabsNavigation;
