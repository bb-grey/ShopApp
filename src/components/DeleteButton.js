import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, StyleSheet, View} from 'react-native';
import {redColor, secondaryColor} from '../constants/strings';
import {DEFAULT_MARGIN} from '../constants/numbers';
import CartButtonContainer from './CartButtonContainer';

const DeleteButton = ({onPress, ...props}) => {
  return (
    <CartButtonContainer style={{borderColor: redColor}} onPress={onPress}>
      <Icon name="trash-outline" size={22} color={redColor} />
    </CartButtonContainer>
  );
};

export default DeleteButton;
