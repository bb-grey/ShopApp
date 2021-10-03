import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {DEFAULT_PADDING} from '../constants/numbers';
import {lightGreyColor} from '../constants/strings';

const ShopCounterButton = props => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, props.style]}
      onPress={props.onPress}>
      {props.icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: lightGreyColor,
    borderWidth: 1,
    padding: DEFAULT_PADDING / 4,
  },
});

export default ShopCounterButton;
