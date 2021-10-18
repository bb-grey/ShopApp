import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, StyleSheet, View} from 'react-native';
import {secondaryColor} from '../constants/strings';
import {DEFAULT_MARGIN} from '../constants/numbers';
import CartButtonContainer from './CartButtonContainer';

const AddToCartButton = ({title = 'ADD', onPress, ...props}) => {
  return (
    <CartButtonContainer onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.divider} />
      <Icon name="cart-outline" size={22} color={secondaryColor} />
    </CartButtonContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: secondaryColor,
  },
  divider: {
    marginHorizontal: DEFAULT_MARGIN / 2,
  },
});

export default AddToCartButton;
