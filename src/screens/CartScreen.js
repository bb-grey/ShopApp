import React from 'react';
import {View, StyleSheet} from 'react-native';
import CartItem from '../components/CartItem';
import {DEFAULT_PADDING} from '../constants/numbers';

const CartScreen = () => {
  console.log('Cart Screen rendered');

  return (
    <View style={styles.container}>
      <CartItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DEFAULT_PADDING,
  },
});

export default CartScreen;
