import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';

export default function OrdersScreen ({user}) {
    const [ordersView, setOrdersView] = useState(null);

    useEffect(() => {
        const getOrderList = (orders) => {
            console.log('getOrderList start');
            console.log('orders = ', orders);
            let orderView = []
            Object.keys(orders).forEach(id => {
                orderView.push(
                <>
                    <Text> OrderId: {id}</Text>
                    <Text> {orders[id]}</Text>
                    <Text> </Text>
                </>
                );
              });
            setOrdersView(orderView);
        }

        if (user.orders) {
            getOrderList(user.orders);
        }
    }, [user.orders]);

    return (
        <ScrollView>
            {ordersView}
        </ScrollView>
      );
}