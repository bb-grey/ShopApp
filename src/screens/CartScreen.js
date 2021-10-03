import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CartScreen = () => {
  console.log('Cart Screen rendered');

  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartScreen;
