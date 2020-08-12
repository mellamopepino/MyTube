import React from 'react';
import {
  StyleSheet,
} from 'react-native'
import { Header, Icon } from 'react-native-elements';

const CustomHeader = (props) => {
  const { title, buttonIcon, onPress} = props

  const renderButton = () => {
    return (
      buttonIcon &&
      <Icon
        name={buttonIcon}
        color="white"
        onPress={onPress}
      />
    )
  }

  return (
    <Header
      leftComponent={renderButton}
      centerComponent={{ text: title, style: styles.centerComponent }}
    />
  )
}

const styles = StyleSheet.create({
  centerComponent: {
    color: "#fff",
  }
})

export default CustomHeader;
