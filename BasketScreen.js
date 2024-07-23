import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import OrderForm from './OrderForm';



export default function BasketScreen ({basketFill, setBasketFill, setBasketView, user}) {
    const [basketViews, setBasketViews] = useState(null);
    const [orderList, setOrderList] = useState(null);
    //console.log('user in Basket =');
    //console.log(user);

    useEffect(() => {
        const getBasketList = (basketFill) => {
            console.log('getBasketList start');
            let basketList = [];
            let order = '';
            for (let i = 0; i < basketFill.length; i++) {
                basketList.push(
                    <>
                        <Text> {i+1}. {basketFill[i][0]}</Text>
                        <Text> Quantity: {basketFill[i][1]}</Text>
                        <Button title='+' onPress={() => changeQuantity(i, '+')}/> 
                        <Button title='-' onPress={() => changeQuantity(i, '-')}/>
                        <Button title='Delete item' onPress={() => deleteItem(i)}/>
                        <Text> </Text>
                        <Text> </Text>
                    </>
                );
                order += `${i+1}. ${basketFill[i][0]}\nQuantity: ${basketFill[i][1]}\n\n`;
            }
            setBasketViews(basketList);
            setOrderList(order);
            //console.log(order);
        }
      getBasketList(basketFill);
    }, [basketFill]);

  const changeQuantity = (i, sign) => {
    let basket = [...basketFill];
    if (sign == '+') {
      basket[i][1] += 1;
    }
    if (sign == '-' && basket[i][1] > 1) {
      basket[i][1] -= 1;
    }
    setBasketFill(basket);
    console.log('basket = ', basket);
    console.log('basketFill = ', basketFill);
  }

  const deleteItem = (i) => {
    let basket = [...basketFill];
    basket.splice(i, 1);
    setBasketFill(basket);
    console.log('basket = ', basket);
    console.log('basketFill = ', basketFill);
  }

  return (
    <View >    
        {basketViews}
        {basketFill.length > 0 ? (<OrderForm  user={user} msg={orderList}/>) : (null)}
        <Button title='⬅' onPress={() => setBasketView(false)}/> 
        {basketFill.length > 0 ? (<Button title='Clear Basket' onPress={() => setBasketFill([])}/>) : (null)}
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
