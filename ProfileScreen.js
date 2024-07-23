import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function ProfileScreen ({user, logOut, getUserData}) {
  /*const [user, setUser] = useState(null);
  
  useEffect( () => {
    const fetchData = async () => {
      //await getUserData();
      const userData = await getItem('user');
      setUser(JSON.parse(userData));
    }
    fetchData();
  })*/

 //const user = JSON.parse(userData);

    return (
        <View>
          <Text> Email: {user.email} </Text>
          <Text> Role: {user.role} </Text>
          <Text> Id: {user['id']} </Text>
          <Button title="Log Out" onPress={logOut} />
        </View>
      );
}