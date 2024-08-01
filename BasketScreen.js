import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import OrderForm from './OrderForm';



export default function BasketScreen ({basketFill, setBasketFill, setBasketView, user}) {
    const [basketViews, setBasketViews] = useState(null);
    const [orderList, setOrderList] = useState(null);
    const [totalSum, setTotalSum] = useState(0);
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
                        <Text> Price: {calculatePrice(basketFill[i])}</Text>
                        <Button title='Delete item' onPress={() => deleteItem(i)}/>
                        <Text> </Text>
                        <Text> </Text>
                    </>
                );
                order += `${i+1}. ${basketFill[i][0]}\nQuantity: ${basketFill[i][1]}\nPrice: ${calculatePrice(basketFill[i])}\n\n`;
            }
            setBasketViews(basketList);
            setOrderList(order);
            getTotalSum();
            //console.log(order);
        }
      getBasketList(basketFill);
    }, [basketFill]);

    const calculatePrice = (item) => {
      return Math.round(item[1]*(+(item[2].slice(1).replace(",", "")))* 100) / 100
    }

    const getTotalSum = () => {
      let sum = 0;
      for (let i = 0; i < basketFill.length; i++) {
        sum += calculatePrice(basketFill[i]);
      }
      setTotalSum(Math.round(sum * 100) / 100);
    }

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
        {basketFill.length > 0 ? (<Text>Total Price: {totalSum}</Text>) : (null)}
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
