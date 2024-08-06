import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, TouchableHighlight } from 'react-native';
import ProjectsScreen from './ProjectsScreen';

export default function ManagersScreen ({getUsers, fetchUserProject, reloadFlag, viewProject, setViewProject}) {
    const [usersView, setUsersView] = useState(null);
    const [user, setUser] = useState(null);

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
 
    const selectProject = (user) => {
        setViewProject(user.project);
        setUser(user);
    }

    const viewUsers = (users) =>  {
        console.log(users);
        let userView = [];
        for (let i = 0; i < users.length; i++) {
            userView.push(
                <>
                    <TouchableHighlight onPress={() => selectProject(users[i])}> 
                    <Text> {users[i].email} </Text>
                    </TouchableHighlight>
                    <Text> </Text>
                </>
            );
        } 
        console.log('userView ', userView);
        setUsersView(userView);
    }
    
    return (
        <ScrollView>
            {user ? (
                <ScrollView>
            <ProjectsScreen user={user}  fetchUserProject={fetchUserProject}
                  viewProject={viewProject} setViewProject={setViewProject}
                  admin={true} setUser={setUser}/>
                </ScrollView>
                ) : (
                    <ScrollView>
                {usersView}
                </ScrollView>)}
        </ScrollView>
      );
}