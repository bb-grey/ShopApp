import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EditProductScreen = () => {
  console.log('Edit Poduct Screen rendered');

  return (
    <View style={styles.container}>
      <Text>Edit Product Screen</Text>
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

export default EditProductScreen;
