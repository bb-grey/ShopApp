import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {DEFAULT_BORDER_RADIUS, DEFAULT_PADDING} from '../constants/numbers';
import {secondaryColor} from '../constants/strings';

const CartButtonContainer = ({onPress, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, props.style]}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: DEFAULT_PADDING * 2,
    paddingVertical: DEFAULT_PADDING / 2,
    borderColor: secondaryColor,
    borderWidth: 2,
    borderRadius: DEFAULT_BORDER_RADIUS * 5,
  },
});

export default CartButtonContainer;
