import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import { appColor } from '../../styles'

import Home from '../Home';
import Menu from '../Menu';

const Tab = createBottomTabNavigator();

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Home"}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: appColor,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
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
          component={Menu}
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
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigation;
