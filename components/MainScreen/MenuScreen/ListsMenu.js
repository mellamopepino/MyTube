import React, {useContext} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import MainContext from '../MainContext';
import ListElement from './ListElement';

const ListsMenu = (props) => {
  const {lists} = useContext(MainContext);
  const {navigation} = props;

  const handlePress = (id, name) => {
    navigation.navigate('Videos', {
      name,
      id,
    });
  };

  if (!lists) {
    return null;
  }

  if (lists.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>No hay listas :(</Text>
      </View>
    );
  }

  return (
    <View>
      <ScrollView>
        {lists.map((list) => (
          <ListElement key={list._id} list={list} onPress={handlePress} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    color: 'grey',
    fontSize: 20,
  },
});

export default ListsMenu;
