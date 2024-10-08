import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView, Modal } from 'react-native';
import OrderForm from './OrderForm';



export default function BasketScreen ({basketFill, setBasketFill, setBasketView, user, setModalVisible,
                                      chosenProject, deliveryDate, modalVisible, setDeliveryDate}) {
    const [basketViews, setBasketViews] = useState(null);
    const [orderList, setOrderList] = useState(null);
    const [totalSum, setTotalSum] = useState(0);

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

            setTotalSum(getTotalSum());
            //order += `Total price: ${totalSum}`;
            setOrderList(order);
            setBasketViews(basketList);
            //console.log(order);
        }
      getBasketList(basketFill);
    }, [basketFill]);

    const calculatePrice = (item) => {
      return Math.round(item[1]*(+(item[2].slice(1).replace(",", "")))* 100) / 100
    }

    useEffect(() => {
      const getBasketList = () => {
          if (totalSum) {
            setOrderList(orderList +`Total price: ${totalSum}`);
          }
      }
    getBasketList();
  }, [totalSum]);

    const getTotalSum = () => {
      let sum = 0;
      for (let i = 0; i < basketFill.length; i++) {
        sum += calculatePrice(basketFill[i]);
      }
      return Math.round(sum * 100) / 100;
      //new Promise((resolve) => setTotalSum(Math.round(sum * 100) / 100, resolve)); 
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
    <ScrollView>    
        {basketViews}
        {basketFill.length > 0 ? (<Text>Total Price: {totalSum}</Text>) : (null)}
        {basketFill.length > 0 ? (
            <OrderForm  user={user} msg={orderList} setBasketFill={setBasketFill}
                        chosenProject={chosenProject} setModalVisible={setModalVisible}
                        deliveryDate={deliveryDate} modalVisible={modalVisible}
                        setDeliveryDate={setDeliveryDate} />        
        ) : (null)}
        {basketFill.length > 0 ? (<Button title='Clear Basket' onPress={() => setBasketFill([])}/>) : (null)}
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