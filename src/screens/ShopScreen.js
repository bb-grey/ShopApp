import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductCard from '../components/ProductCard';
import {DEFAULT_PADDING} from '../constants/numbers';
import {PRODUCT_DETAIL_SCREEN} from '../constants/strings';
import {useSelector} from 'react-redux';

const ShopScreen = ({navigation}) => {
  console.log('Shop Screen rendered');
  const products = useSelector(state => state.products.products);

  const renderProductItem = item => {
    return (
      <ProductCard
        product={item.item}
        onSelectProduct={productId =>
          navigation.navigate(PRODUCT_DETAIL_SCREEN, {productId})
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DEFAULT_PADDING,
  },
  listContainer: {
    marginBottom: 12,
  },
});

export default ShopScreen;
