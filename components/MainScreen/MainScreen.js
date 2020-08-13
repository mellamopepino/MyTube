import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { appColor } from '../../styles'

import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';

const Tab = createBottomTabNavigator();

const MainScreen = (props) => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: appColor,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
        component={MenuScreen}
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

export default MainScreen;
