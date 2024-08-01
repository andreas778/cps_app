import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, ScrollView } from 'react-native';
//import { WebView } from 'react-native-webview';


export default function ProductScreen ({product, handleProduct, addToBasket, user}) {

  return (
    <ScrollView>   
        <Text selectable={true}> {product[0]} </Text>     
        <Image 
        source={{uri: product[2]}}
        style={{width: 200, height: 200}}
        />
        <Text selectable={true}> Price: {product[3]} </Text>
        <Text selectable={true}> {product[1]} </Text>
        {user.role != 'admin' ? (
          <Button title='Add to basket' onPress={() => addToBasket(product)}/> )
          : (null)}
        <Button title='⬅' onPress={() => handleProduct(null)}/>      
    </ScrollView>
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
