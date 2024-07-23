import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function ProjectsScreen ({user}) {
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

        getOrderList(user.orders);
    }, [user.orders]);

    return (
        <View>
            {ordersView}
        </View>
      );
}