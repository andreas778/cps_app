import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';

export default function ManagersScreen ({getUsers, fetchUserProject, reloadFlag}) {
    const [usersView, setUsersView] = useState(null);

    useEffect(() => {
        async function fetchManagers () {
            console.log('fetch mng start');
            const role = 'manager'
            const users = await getUsers();
            console.log(users);
            let usersByRole = [];
            Object.keys(users).forEach(id => {
                //console.log(`Key: ${id}, Role: ${users[id].role}, Email: ${users[id].email}`);
                if (users[id].role == role) {
                    usersByRole.push(users[id]);
                }
                });
            console.log(usersByRole);
            console.log('fetch mng finish');
            viewUsers(usersByRole);
        }
        fetchManagers();
    }, [reloadFlag]);
 

    const viewUsers = (users) =>  {
        console.log(users);
        let userView = [];
        for (let i = 0; i < users.length; i++) {
            userView.push(
                <>
                    <Text> Manager {i+1}: {users[i].email} </Text>
                    {users[i].projects ? (
                        <>
                            <Text> Projects: </Text>
                            <>{fetchUserProject(users[i].projects)}</>
                        </>
                    ) : (null)}
                </>
            );
        } 
        console.log('userView ', userView);
        setUsersView(userView);
    }
    
    return (
        <ScrollView>
            {usersView}
        </ScrollView>
      );
}