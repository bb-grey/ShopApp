import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CartItem from '../components/CartItem';
import {DEFAULT_PADDING} from '../constants/numbers';
import {useSelector, useDispatch} from 'react-redux';
import PRODUCTS from '../data/dummy-data';

const CartScreen = () => {
  console.log('Cart Screen rendered');
  const cartItems = useSelector(state => state.cart.cartItems);
  const renderCartItem = ({item}) => {
    return <CartItem productId={item.productId} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.productId}
        data={cartItems}
        renderItem={renderCartItem}
      />
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
