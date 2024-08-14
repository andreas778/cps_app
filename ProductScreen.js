import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, ScrollView, SafeAreaView } from 'react-native';
//import { WebView } from 'react-native-webview';


export default function ProductScreen ({product, handleProduct, addToBasket, user}) {
  const [qty, setQty] = useState('1');

  const reduceQty = () => {
    if (qty > 1) {
      setQty((+qty - 1).toString())
    }
  }

  return (
    <ScrollView>
        <Button title='⬅' onPress={() => handleProduct(null)}/> 
        <TextInput
                placeholder="Quantity"
                value={qty}
                onChangeText={setQty}
        />
        <Button title='+' onPress={() => setQty((+qty + 1).toString())}/> 
        <Button title='-' onPress={reduceQty}/>
        {user.role != 'admin' ? (
          <Button title='Add to basket' onPress={() => addToBasket(product, +qty)}/> )
          : (null)}
        <Text selectable={true}> {product[0]} </Text>     
        <Image 
          source={{uri: product[2]}}
          style={{width: 200, height: 200}}
        />
        <Text selectable={true}> Price: {product[3]} </Text>
        <Text selectable={true}> {product[1]} </Text>    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1000,
  },
  webview: {
    flex: 1,
    padding: 150,
  },
});