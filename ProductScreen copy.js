import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';
import { WebView } from 'react-native-webview';

jest.mock('react-native-webview', () => {
  const {View} = require('react-native');
  return {
    WebView: () => View,
  };
});
export default function ProductScreen ({product, handleProduct, addToBasket, user}) {

  return (
    <View >   
         <WebView
        source={{uri: product[2]}}
      />
        {user.role != 'admin' ? (
          <Button title='Add to basket' onPress={() => addToBasket(product)}/> )
          : (null)}
        <Button title='⬅' onPress={() => handleProduct(null)}/>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
