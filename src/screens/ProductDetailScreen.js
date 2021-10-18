import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AddToCartButton from '../components/AddToCartButton';
import DeleteButton from '../components/DeleteButton';
import {
  DEFAULT_BORDER_RADIUS,
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
} from '../constants/numbers';
import {lightGreyColor, secondaryColor} from '../constants/strings';
import PRODUCTS from '../data/dummy-data';
import {addToCart, removeFromCart} from '../store/features/cart/cartSlice';

const ProductDetailScreen = ({route, navigation}) => {
  console.log('Product Detail Screen rendered');
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const productId = route?.params?.productId;
  const product = PRODUCTS.find(pr => pr?.id === productId);

  const inCart = () => {
    return cartItems.findIndex(item => item.productId === productId) > -1;
  };

  const addProductToCart = () => {
    dispatch(addToCart({productId: product.id, quantity: 1}));
  };

  const removeProductFromCart = () => {
    dispatch(removeFromCart({productId: product?.id}));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: product?.imageUrl}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.description}>{product?.description}</Text>
        <View style={styles.cartButtonContainer}>
          {inCart() ? (
            <DeleteButton onPress={removeProductFromCart} />
          ) : (
            <AddToCartButton
              title="Add To Cart"
              style={{
                paddingVertical: DEFAULT_PADDING,
                borderRadius: DEFAULT_BORDER_RADIUS * 8,
              }}
              onPress={addProductToCart}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DEFAULT_PADDING,
  },
  imageContainer: {
    backgroundColor: secondaryColor,
    width: '100%',
    height: 300,
    marginTop: DEFAULT_MARGIN * 2,
    borderRadius: DEFAULT_BORDER_RADIUS * 4,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: lightGreyColor,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    width: '100%',
    marginTop: DEFAULT_MARGIN * 3,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginTop: DEFAULT_MARGIN,
    textAlign: 'center',
  },
  cartButtonContainer: {
    marginVertical: DEFAULT_MARGIN * 2,
  },
});

export default ProductDetailScreen;
