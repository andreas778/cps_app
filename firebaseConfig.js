// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import {  initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
//import {  } from 'firebase/database';
//import { db } from './firebaseConfig';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmUfUsiqhQTt9deMmLZYE08i8UvAQTuYQ",
  authDomain: "cps-app-77ed0.firebaseapp.com",
  databaseURL: 'https://cps-app-77ed0-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: "cps-app-77ed0",
  storageBucket: "cps-app-77ed0.appspot.com",
  messagingSenderId: "632142256702",
  appId: "1:632142256702:web:8fdb9317cc6d4a1ee24f6f",
  measurementId: "G-NMJGDPMT11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
//const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// Initialize Realtime Database
//const db = getDatabase(app);
//console.log(db);
/*
async function testDatabaseConnection() {
  try {
    const testRef = ref(db, 'users/' + 'pTH1DamHAAN0efEBQOxeN6ztIkZ2');
    const snapshot = await get(testRef);
    if (snapshot.exists()) {
      console.log('Database connection successful:', snapshot.val());
    } else {
      console.log('No data available');
    }
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

testDatabaseConnection();
*/
export { auth };
