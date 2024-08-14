import React, { useCallback, useEffect, useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button, Alert, Modal, ScrollView, ActivityIndicator } from 'react-native';


import { send, EmailJSResponseStatus } from '@emailjs/react-native';
import { app } from './firebaseConfig'; // Import auth and db from firebaseConfig
import { getDatabase, ref, get, set } from 'firebase/database';
//import DateScreen from './DateScreen'


export default function OrderForm ({user, msg, setBasketFill, chosenProject, setModalVisible, deliveryDate,
                                    modalVisible, setDeliveryDate}) {
  //const [email, setEmail] = useState({email});
  const [name, setName] = useState({name});
  const [userOrders, setUserOrders] = useState({});
  const [orderId, setOrderId] = useState(null);
  const [adminEmails, setAdminEmails] = useState(null);
  const [startSending, setStartSending] = useState(false);
  const [message, setMessage] = useState(null);

  
  useEffect(() => {
      function writeUserOrder (userId) {
        //console.log('userOrders && orderId = ', userOrders, orderId);
        if (orderId) {
          console.log('writeUserOrder start');
          const db = getDatabase(app);
          console.log('got DATABASE');
          //const min = Math.pow(10, 19);
          //const max = Math.pow(10, 20)-1;
          //(Math.floor(Math.random() * (max - min + 1)) + min);
          console.log('userOrders = ', userOrders);
          console.log('got DATABASE');
          let orders = userOrders;
          orders[orderId] = msg;
          console.log('orders', orders);
          set(ref(db, 'users/' + userId + '/projects/' + chosenProject[2] + '/stages/' + chosenProject[3] + '/orders'), orders);
      }
    }

      writeUserOrder(user.id);
    }, [orderId]);

  async function sendEmailWithTimeout(email, orderId) {
      const timeout = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('sendEmail took longer than 10 seconds')), 10000)
      );
  
      return Promise.race([sendEmail(email, orderId), timeout]);
  }

  useEffect(() => {
    async function makingOrder () {
      if (orderId && adminEmails) {
        for(let i = 0; i < adminEmails.length; i++) {
          console.log('sending email');
          try {
            await sendEmailWithTimeout(adminEmails[i].toLowerCase(), orderId); //! add promise timeout
          }
          catch {
            //console.error(`Failed to send email to ${adminEmails[i]}:`, error);
            setStartSending(false);
            Alert.alert(`Error making order, please try again!`, [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ])
          }
        }
        setStartSending(false);
      }
  }

    makingOrder();
  }, [orderId]);

  

useEffect(() => {
  async function sendingEmails () {
    if (deliveryDate && !modalVisible) {
      console.log('\n\n\nSTART SENDING MAILS 22222\n\n\n');
      setMessage('Project: ' + chosenProject[0].title + '\nStage: ' + chosenProject[1].title + '\n' + msg + '\n\nDelivery date: ' + deliveryDate);
      setStartSending(true);
      await sendEmails();
    }
  }
    sendingEmails();
  }, [deliveryDate, modalVisible]);


  useEffect(() => {
    async function finishSending () {
      if (!startSending && orderId) {
        Alert.alert(`Order ${orderId} was made successfully`, message, [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ])
        setOrderId(null);
        setBasketFill([]);
        setDeliveryDate(null);
      }
    }
    finishSending();
    }, [startSending]);


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
    console.log('Im sending mail...');
    //return;
    try {
      await send(
        'service_md391k9',
        'template_hexsvh6',
        {
          name: 'CPS',
          email,
          message: message,
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
    console.log('fetchEmails start');
    let emails = [];
    let orders = null;
    Object.keys(users).forEach(id => {
      console.log(`Key: ${id}, Role: ${users[id].role}, Email: ${users[id].email}`);
      if (users[id].role == role) {
        emails.push(users[id].email);
      }
      console.log('orders in users[id] ', 'orders' in users[id]);
      console.log('id == userId ', id == userId);
      let userStageOrders = null;
      try {
        userStageOrders = users[id].projects[chosenProject[2]].stages[chosenProject[3]].orders;
        console.log('users[id].orders  ', userStageOrders);
        if (id == userId) {
          if (userStageOrders) {
            setUserOrders(userStageOrders);
          }
        }
      }
      catch {
        
      }
    });
    console.log('emails ', emails);
    console.log('user ', user);
    return emails;
  }

  const sendEmails = async () => {
    console.log('chosenProject = ', chosenProject);
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
    return Date.now();
    /*
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    console.log('result = ', result);
    return result;*/
}


  return (
    <ScrollView>
      <Button title="Make an order"  onPress={() => setModalVisible(true)}/>
      {startSending ? (
        <>
        <Modal
            animationType="slide"
            transparent={false}
            visible={startSending}
            onRequestClose={() => {
                  setStartSending(false);
            }}>
            <ActivityIndicator size="large"/>
            <Text>Creating order ... Do Not Close the App!</Text>
          </Modal>
        </>
      ) : (null)}
    </ScrollView>
  );
};