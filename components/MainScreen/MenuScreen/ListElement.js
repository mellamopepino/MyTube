import React from 'react';
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
    <TouchableHighlight onPress={handlePress} >
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>{list.name}</Text>
      </View>
    </TouchableHighlight>
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
