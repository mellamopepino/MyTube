import React, { useContext, } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import HomeContext from '../../context/HomeContext'
import ListElement from './ListElement'

const ListsMenu = (props) => {
  const { lists } = useContext(HomeContext)
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
