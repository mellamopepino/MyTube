import React from 'react';
import {StyleSheet} from 'react-native';
import {Header as RNHeader, Icon} from 'react-native-elements';
import {appColor} from '../../styles';

const CustomHeader = (props) => {
  const {title, buttonIcon, onPress} = props;

  const renderButton = () => {
    return (
      buttonIcon && <Icon name={buttonIcon} color="white" onPress={onPress} />
    );
  };

  return (
    <RNHeader
      backgroundColor={appColor}
      leftComponent={renderButton}
      centerComponent={{text: title, style: styles.centerComponent}}
    />
  );
};

const styles = StyleSheet.create({
  centerComponent: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CustomHeader;
