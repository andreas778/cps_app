import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView, TouchableHighlight, Modal } from 'react-native';


export default function DateScreen ({deliveryDate, setDeliveryDate, setModalDateView,
                                    setModalVisible, chosenProject}) {
    
    const [typeDate, setTypeDate] = useState(null);

    const submit = () => {
        setDeliveryDate(typeDate);
        setModalDateView(false);
        setModalVisible(false);
    }


    return (
        <ScrollView>
            <Text>Your chosen Project Stage:</Text>
            <Text>{chosenProject[0].title}</Text>
            <Text>{chosenProject[1].title}</Text>
            <Text>Select Delivery date:</Text>
            <TextInput
                placeholder="Enter delivery date in format DD/MM/YY"
                value={typeDate}
                onChangeText={setTypeDate}
            />
            <Text>Chosen Date: {typeDate} </Text>
            <Button title='Ok' onPress={submit}/> 
        </ScrollView>
    );
}