/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_BORDER_RADIUS,
} from '../constants/numbers';
import {lightGreyColor, SELECT_QUANTITY_MSG} from '../constants/strings';
import AddToCartButton from './AddToCartButton';
import ShopCounterButton from './ShopCounterButton';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../store/features/cart/cartSlice';
import DeleteButton from './DeleteButton';
import Snackbar from 'react-native-snackbar';

const ProductCard = ({product, onSelectProduct}) => {
  console.log('product card rendered');
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const [quantity, setQuantity] = useState(0);

  const incrementProductQuantity = () => {
    if (inCart()) {
      dispatch(incrementQuantity({productId: product?.id, quantity: 1}));
    } else {
      setQuantity(q => q + 1);
    }
  };

  const decrementProductQuantity = () => {
    if (inCart()) {
      if (getProductQuantityFromCart() > 1) {
        dispatch(decrementQuantity({productId: product?.id, quantity: 1}));
      }
    } else {
      if (quantity > 0) {
        setQuantity(q => q - 1);
      }
    }
  };

  const getProductQuantityFromCart = () => {
    if (inCart()) {
      return cartItems.find(item => item.productId === product.id).quantity;
    }
    return 0;
  };

  const inCart = () => {
    console.log('in cart function');
    return cartItems.findIndex(item => item.productId === product.id) > -1;
  };

  const addProductToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart({productId: product.id, quantity: quantity}));
    } else {
      Snackbar.show({
        text: SELECT_QUANTITY_MSG,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  const removeProductFromCart = () => {
    console.log('Remove pressed');
    dispatch(removeFromCart({productId: product?.id}));
    setQuantity(0);
  };

  return (
    <View style={styles.productCard}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{flex: 1}}
        onPress={() => {
          setQuantity(0);
          onSelectProduct(product?.id);
        }}>
        <View style={styles.imageContainer}>
          <Image source={{uri: product.imageUrl}} style={styles.image} />
        </View>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {product?.title?.length < 16
            ? product?.title
            : `${product?.title?.substring(0, 12)}...`}
        </Text>

        <View style={styles.counterContainer}>
          <ShopCounterButton
            icon={<Icon name="add" size={24} />}
            onPress={incrementProductQuantity}
          />
          <View style={styles.divider} />
          <Text>{inCart() ? getProductQuantityFromCart() : quantity}</Text>
          <View style={styles.divider} />
          <ShopCounterButton
            icon={
              <Icon
                name="remove-outline"
                size={24}
                onPress={decrementProductQuantity}
              />
            }
          />
        </View>

        <View>
          {inCart() ? (
            <DeleteButton onPress={removeProductFromCart} />
          ) : (
            <AddToCartButton onPress={addProductToCart} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: '100%',
    height: 240,
    marginVertical: DEFAULT_MARGIN,
    borderRadius: DEFAULT_BORDER_RADIUS * 2,
    borderColor: lightGreyColor,
    borderWidth: 1,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: DEFAULT_PADDING,
    paddingVertical: DEFAULT_PADDING,
    borderTopWidth: 1,
    borderTopColor: lightGreyColor,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    marginHorizontal: DEFAULT_MARGIN / 2,
  },
});

export default ProductCard;
