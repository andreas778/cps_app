import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';
//import { WebView } from 'react-native-webview';


export default function ProductScreen ({product, handleProduct, addToBasket, user}) {

  return (
    <View >   
        <Text> {product[0]} </Text>     
        <Image 
        source={{uri: product[2]}}
        style={{width: 200, height: 200}}
        />
        <Text> {product[1]} </Text>
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
