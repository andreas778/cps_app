import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, TouchableHighlight, Switch } from 'react-native';

export default function ProjectsScreen ({user, fetchUserProject, viewProject, setViewProject, admin, setUser}) {
    const [userProjects, setUserProjects] = useState(null);
    const [viewStage, setViewStage] = useState(null);
    const [viewStages, setViewStages] = useState([]);
    const [viewOrders, setViewOrders] = useState([]);

    useEffect(() => {
        if (user.projects) {
            setUserProjects(fetchUserProject(user.projects));
        }
        console.log('viewProject1 = ', viewProject);
    }, [user.projects]);

 
    useEffect(() => {
        const getViewStages = async (stages) => {
            console.log('stages = ', stages);
            let vStages = [];
            Object.keys(stages).forEach(id => {
                console.log('stages[id] = ', stages[id]);
                vStages.push(
                    <>
                        <TouchableHighlight onPress={() => setViewStage(stages[id])}> 
                        <Text> {stages[id].title} </Text>
                        </TouchableHighlight>
                        <Text> </Text>
                    </>
                );
            });
            console.log('vStages = ', vStages);
            setViewStages(vStages);
        }
        if (viewProject) {
            getViewStages(viewProject.stages);
        }
    }, [viewProject]);
 
    useEffect(() => {
        const getViewOrders = async (stages) => {
            console.log('stages = ', stages);
            let vOrders = [];
            Object.keys(stages).forEach(id => {
                console.log('stages[id] = ', stages[id]);
                vOrders.push(
                    <>
                        <TouchableHighlight onPress={() => setViewStage(stages[id])}> 
                        <Text> {stages[id]} </Text>
                        </TouchableHighlight>
                        <Text> </Text>
                    </>
                );
            });
            console.log('vOrders = ', vOrders);
            setViewOrders(vOrders);
        }
        if (viewStage) {
            getViewOrders(viewStage.orders);
        }
    }, [viewStage]);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView>
            {admin && !viewProject? (
                <Button title='⬅' onPress={() => setUser(null)}/>  
            ) : (null)}
            {!viewProject ? (
                <ScrollView>
                    {userProjects}
                </ScrollView>
            ) : (null)}
            {viewProject && !viewStage ? (
                <ScrollView>
                    <Button title='⬅' onPress={() => setViewProject(null)}/>  
                    {viewStages}
                </ScrollView>
            ) : (null)}
            {viewStage ? (
                <ScrollView>
                    <Button title='⬅' onPress={() => setViewStage(null)}/>  
                    {user.role != 'admin' ? (
                        <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    ): (null)}
                    {viewOrders}
                </ScrollView>
            ) : (null)}
        </ScrollView>
      );
}