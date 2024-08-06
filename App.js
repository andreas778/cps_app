import React, { useCallback, useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { View, Text, StyleSheet, Button, SafeAreaView, RefreshControl, ScrollView, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import LoginForm from './LoginForm';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, app } from './firebaseConfig'; // Import auth and db from firebaseConfig
import { getDatabase, ref, get, set } from 'firebase/database';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import ProjectsScreen from './ProjectsScreen';
import ManagersScreen from './ManagersScreen';
import ProductScreen from './ProductScreen';
import OrdersScreen from './OrdersScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [reloadFlag, setReloadFlag] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [enableRefreshing, setEnableRefreshing] = useState(true);
  const [viewProject, setViewProject] = useState(null);



  const onRefresh = useCallback(() => {
    setRefreshing(true);
    try {
      reloadData();
    }
    catch {
      console.log('Error reloading');
    }      
    
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  }, []);
  

  useEffect(() => {
    async function prepare() {
      try {
        console.log('Change this PLEASE');
        //await Font.loadAsync(Entypo.font);
        await getItem('user');
        if (user) {
          console.log('YESSSSSSSS');
          console.log(user);
          await getUserData(user.id);
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (e) {
        console.warn(e);
      } finally {
        console.log(user);
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }




  const getItem = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      value != null ? setUser(JSON.parse(value)) : setUser(null);
      //console.log('value is ');
      //console.log(value);
      console.log('user is');
      //console.log(typeof user);
      console.log(user);
    } catch (error) {
      console.error('Error getting item:', error);
      setUser(null);
    }
  };

  const logOut = async () => {
    setUser(null);
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  }

  const setItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting item:', error);
    }
  };


  const handleLogIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userInfo = userCredential.user;
      const error = await getUserData(userInfo.uid);
      return error;
    } 
    catch (error) {
      console.error(error);
      return error.message;
  };
}

const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item:', error);
  }
};

  const getUserData = async (userInfo) => {
    // Fetch user role from Realtime Database
    console.log('reloading user');
    //console.log(userInfo);
    //return;
    const db = getDatabase(app);
    const userRef = ref(db, 'users/' + userInfo);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      //const userRole = userData.role;
      userData['id'] = userInfo;
      console.log(userData);
      console.log(userInfo);
      //await removeItem('user');
      //onLoginSuccess(userRole); // Pass the user role to the parent component
      await setItem('user', userData);
      console.log(typeof onLoginSuccess);
      await getItem('user');
      console.log(userInfo);
    } else {
      return ('No such user found');
    }
  }

  const getUsers = async () =>  {
    console.log('getUsers start');
    const db = getDatabase(app);
    const usersRef = ref(db, 'users/');
    const snapshot = await get(usersRef);
    if (snapshot.exists()) {
      console.log('getUsers finish');
      return snapshot.val();
    }
  }

  const reloadData = async () =>  {
    setReloadFlag(!reloadFlag);
    await getUserData(user.id);
    //if (user.role == 'admin') {
     // await getUsers();
    //}
  }

  const fetchUserProject = (user) =>  {
    let projects = [];
    console.log(user);
    Object.keys(user).forEach(project => {
        //console.log(`Key: ${id}, Role: ${user[id].role}, Email: ${user[id].email}`);
        projects.push(
            <>
                <TouchableHighlight onPress={() => setViewProject(user[project])}> 
                  <Text> {user[project].title} </Text>
                </TouchableHighlight>
                <Text> </Text>
            </>
        );
      });
        
        
    console.log('projects');
    console.log(projects);
    return projects;
}


  return (
      <NavigationContainer>
        {user ? (   
          <>
          <Button title='Reload' onPress={reloadData}/>  
          <Tab.Navigator>
            <Tab.Screen name="Search">
              {props => <HomeScreen {...props} user={user}/>}
            </Tab.Screen>          
            {user.role == 'admin' ? (
              <Tab.Screen name="Managers List ">
                {props => <ManagersScreen {...props}  getUsers={getUsers}
                fetchUserProject={fetchUserProject} reloadFlag={reloadFlag}
                viewProject={viewProject} setViewProject={setViewProject}/>}
              </Tab.Screen>
            ) : (
              <>
                <Tab.Screen name="My Projects ">
                  {props => <ProjectsScreen {...props}  user={user}  fetchUserProject={fetchUserProject}
                  viewProject={viewProject} setViewProject={setViewProject}/>}
                </Tab.Screen>
              </>
            )}
            <Tab.Screen name="Profile">
              {props => <ProfileScreen {...props}  user={user} logOut={logOut} />}
            </Tab.Screen>
          </Tab.Navigator>
          
      </> 
          
          ) : (
          <View  style={styles.container} onLayout={onLayoutRootView}>
            <LoginForm onLoginSuccess={handleLogIn}/>
          </View>
          )}
      </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  scrollView: {
    flex: 1, // This will make the ScrollView take up 20% of the screen height
    // Or you can use a fixed height:
    height: '10%', // This will make the ScrollView 100 pixels tall
  },
});