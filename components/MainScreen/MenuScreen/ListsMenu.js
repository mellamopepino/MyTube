import React, { useContext, } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import MainContext from '../MainContext'
import ListElement from './ListElement'

const ListsMenu = (props) => {
  const { lists } = useContext(MainContext)
  const { navigation } = props

  const handlePress = (id, name) => {
    navigation.navigate('Videos', {
      name,
      id,
    })
  }

  return (
    <View>
      <ScrollView>
        {lists.map((list) => (
          <ListElement key={list._id} list={list} onPress={handlePress}/>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({});

export default ListsMenu;
