import React from 'react';
import {ListItem} from 'react-native-elements';

const ListElement = (props) => {
  const {list, onPress} = props;

  const handlePress = () => {
    onPress(list._id, list.name);
  };

  return (
    <ListItem
      title={list.name}
      onPress={handlePress}
      bottomDivider={true}
      chevron={true}
    />
  );
};

export default ListElement;
