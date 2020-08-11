import React, { useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import HomeContext from '../../context/HomeContext'

const Home = (props) => {
  const { lists } = useContext(HomeContext)

  return (
    <View>
      <ScrollView>
        {lists.map((list) => {
          return (
            <View key={list._id} style={styles.listContainer}>
              <Text style={styles.listTitle}>{list.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  listTitle: {

  },
});

export default Home;
