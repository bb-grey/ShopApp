import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import CartItem from '../store/features/cart/components/CartItem';
import {DEFAULT_PADDING, TITLE_FONT_SIZE} from '../constants/numbers';
import {useSelector} from 'react-redux';
import {CART_SCREEN_MSG} from '../constants/strings';

const CartScreen = () => {
  console.log('Cart Screen rendered');
  const cartItems = useSelector(state => state.cart.cartItems);
  const renderCartItem = ({item}) => {
    return <CartItem productId={item.productId} />;
  };

  const renderCartList = () => {
    return (
      <FlatList
        keyExtractor={item => item.productId}
        data={cartItems}
        renderItem={renderCartItem}
      />
    );
  };

  return (
    <View style={styles.container}>
      {cartItems?.length > 0 ? (
        renderCartList()
      ) : (
        <View style={styles.cartMessageContainer}>
          <Text style={styles.cartMessage}>{CART_SCREEN_MSG}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DEFAULT_PADDING,
  },
  cartMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartMessage: {
    textAlign: 'center',
    fontSize: TITLE_FONT_SIZE,
  },
});

export default CartScreen;
