import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProductDetailScreen = () => {
  console.log('Product Detail Screen rendered');

  return (
    <View style={styles.container}>
      <Text>Product Detail Screen</Text>
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

export default ProductDetailScreen;
