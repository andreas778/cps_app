import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, TouchableHighlight, Switch } from 'react-native';

export default function ProjectsScreen ({user, viewProject, setViewProject, admin, setUser,
                                        modal, chosenProject, setChosenProject, setModalVisible,
                                        setModalDateView}) {

    const [userProjects, setUserProjects] = useState(null);
    const [viewStage, setViewStage] = useState(null);
    const [idViewProject, setIdViewProject] = useState(null);
    const [idViewStage, setIdViewStage] = useState(null);
    const [viewStages, setViewStages] = useState([]);
    const [viewOrders, setViewOrders] = useState([]);

    const colorChosen = 'orange';
    const colorDefault = 'black';

    const getViewProject = (project, id) => {
        console.log('project = ', project, 'id = ', id);
        setViewProject(project);
        setIdViewProject(id);
    }

    const getViewStage = (stage, id) => {
        console.log('stage = ', stage, 'id = ', id);
        setViewStage(stage)
        setIdViewStage(id);
    }
      
    useEffect(() => {      
        const fetchUserProject = (user) =>  {
            let projects = [];
            //console.log(user);
            //let color = colorDefault;
            let color = colorDefault;
            Object.keys(user).forEach(project => {
                //console.log(`Key: ${id}, Role: ${user[id].role}, Email: ${user[id].email}`);
                if (modal && chosenProject && user[project].title == chosenProject[0].title) {
                    color = colorChosen;
                }
                else {
                    color = colorDefault;
                }
                //setProjectsColor(colors);
                //console.log('colour1 = ', color);
                //console.log('chosenProject[0] = ', chosenProject[0]);
                console.log('user[project]   = ', user[project]);
                projects.push(
                    <>
                        <TouchableHighlight onPress={() => getViewProject(user[project], project)}>
                            <Text style={{color: color}}>
                                {user[project].title}
                            </Text>
                        </TouchableHighlight>
                        <Text> </Text>
                    </>
                );
            });
                 
            console.log('projects =', projects);
            return projects;
        }

        if (user.projects) {
            setUserProjects(fetchUserProject(user.projects));
        }
        else {
            setUserProjects(null);
        }
        console.log('viewProject1 = ', viewProject);
    }, [user.projects, chosenProject]);

 
    useEffect(() => {
        const getViewStages = async (stages) => {
            console.log('stages = ', stages);
            let vStages = [];
            let color = colorDefault;
            if (stages) {
                Object.keys(stages).forEach(id => {
                    console.log('stages[id] = ', stages[id]);
                    if (modal && chosenProject && viewProject == chosenProject[0]
                        && stages[id] == chosenProject[1]) {
                            color = colorChosen;
                    }
                    else {
                        color = colorDefault;
                    }
                    console.log('colour2 = ', color);
                    vStages.push(
                        <>
                            <TouchableHighlight onPress={() => getViewStage(stages[id], id)}> 
                                <Text style={{color: color}}> {stages[id].title} </Text>
                            </TouchableHighlight>
                            <Text> </Text>
                        </>
                    );
                });
            }
            console.log('vStages = ', vStages);
            setViewStages(vStages);
        }
        if (viewProject) {
            getViewStages(viewProject.stages);
        }
    }, [viewProject, chosenProject]);

    const isChosenStage = () => {
        console.log('viewProject = ', viewProject);
        console.log('viewStage = ', viewStage);
        if (chosenProject && viewProject && viewStage) {
            if (viewProject == chosenProject[0] && viewStage == chosenProject[1]) {
                return true;
            }
        }

        return false;
    }

    const chooseStage = () => {
        if (viewProject && viewStage && idViewProject && idViewStage) {
            setChosenProject([viewProject, viewStage, idViewProject, idViewStage]);
        }
        //setModalVisible(false);
        setModalDateView(true);
    }

 
    useEffect(() => {
        const getViewOrders = async (stages) => {
            console.log('stages = ', stages);
            let vOrders = [];
            vOrders.push(
                <>
                    {user.role != 'admin' && modal && !isChosenStage() ? (
                        <Button title='Choose project stage' 
                                onPress={chooseStage}/> 
                    ): (null)}  
                    {user.role != 'admin' && modal && isChosenStage() ? (
                        <Button title='Chosen' disabled={true}/> 
                    ): (null)}
                    <Text>Orders: </Text>  
                </>
            )
            if (stages) {
                Object.keys(stages).forEach(id => {
                    console.log('stages[id] = ', stages[id]);
                    vOrders.push(
                        <>
                            <Text> {stages[id]} </Text>
                            <Text> </Text>
                        </>
                    );
                });
            }
            console.log('vOrders = ', vOrders);
            setViewOrders(vOrders);
        }
        if (viewStage) {
            getViewOrders(viewStage.orders);
        }
    }, [viewStage, chosenProject]);

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
                    {viewOrders}
                </ScrollView>
            ) : (null)}
        </ScrollView>
      );
}