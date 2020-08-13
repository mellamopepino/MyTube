import React from 'react';
import { ListItem } from 'react-native-elements'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const ListElement = (props) => {
  const { list, onPress } = props

  const handlePress = () => {
    onPress(list._id, list.name)
  }

  return (
    <ListItem
      title={list.name}
      onPress={handlePress}
      bottomDivider={true}
      chevron={true}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    backgroundColor: "#DDDDDD",
  },
  listTitle: {},
});

export default ListElement;
