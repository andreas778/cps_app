import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { send, EmailJSResponseStatus } from '@emailjs/react-native';
import { app } from './firebaseConfig'; // Import auth and db from firebaseConfig
import { getDatabase, ref, get, set } from 'firebase/database';

export default function OrderForm ({user, msg, setBasketFill}) {
  //const [email, setEmail] = useState({email});
  const [name, setName] = useState({name});
  const [userOrders, setUserOrders] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [adminEmails, setAdminEmails] = useState(null);
  
  useEffect(() => {
      function writeUserOrder (userId) {
        if (userOrders) {
          console.log('writeUserOrder start');
          const db = getDatabase(app);
          console.log('got DATABASE');
          //const min = Math.pow(10, 19);
          //const max = Math.pow(10, 20)-1;
          //(Math.floor(Math.random() * (max - min + 1)) + min);
          console.log('got DATABASE');
          let orders = userOrders;
          orders[orderId] = msg;
          console.log('orders', orders);
          set(ref(db, 'users/' + userId + '/orders'), orders);
          //setUserOrders(null);
      }
    }

      writeUserOrder(user.id);
    }, [userOrders]);

    useEffect(() => {
      async function makingOrder () {
        if (orderId && adminEmails) {
          for(let i = 0; i < adminEmails.length; i++) {
            console.log('sending email');
            await sendEmail(adminEmails[i].toLowerCase(), orderId);
          }
          Alert.alert(`Order ${orderId} was made successfully`, msg, [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
          setOrderId(null);
          setBasketFill([]);
          //
        }
    }

      makingOrder();
    }, [orderId]);



  const sendEmail = async (email, id) => {
    console.log(id);
    try {
      await send(
        'service_md391k9',
        'template_hexsvh6',
        {
          name: 'CPS',
          email,
          message: msg,
          fromName: id,
          byName: user.email
        },
        {
          publicKey: 'orWnfuFRqS-ppDOXI',
        },
      );

      console.log('SUCCESS!');
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EmailJS Request Failed...', err);
      }

      console.log('ERROR', err);
    }
  };


  const getUsers = async () =>  {
    console.log('getUsers start');
    const db = getDatabase(app);
    const usersRef = ref(db, 'users/');
    const snapshot = await get(usersRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
  }

  const fetchEmails = async (role, userId) =>  {
    const users = await getUsers();
    console.log('users');
    console.log(users);
    console.log('userId');
    console.log(userId);
    let emails = [];
    let orders = null;
    Object.keys(users).forEach(id => {
      console.log(`Key: ${id}, Role: ${users[id].role}, Email: ${users[id].email}`);
      if (users[id].role == role) {
        emails.push(users[id].email);
      }
      console.log('orders' in users[id]);
      console.log(id == userId);
      if ('orders' in users[id] && id == userId) {
        console.log('users[id].orders');
        console.log(users[id].orders);
        setUserOrders(users[id].orders);
      }
    });
    console.log('emails ', emails);
    console.log('user ', user);
    return emails;
  }

  const sendEmails = async () => {
    console.log('sending mail start');
    const emails = await fetchEmails('admin', user.id);
    setAdminEmails(emails);
    //console.log(emails);
    //console.log('userOrders ', userOrders);  
    const order = makeId(6);
    setOrderId(order);
    //
    
    //await writeUserOrder(user.id);
  }

  const makeId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    console.log('result = ', result);
    return result;
}



  return (
    <View>
      <Button title="Make an order" onPress={sendEmails} />
    </View>
  );
};