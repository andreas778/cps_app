import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';
import StagesScreen from './StagesScreen';

export default function ProjectsScreen ({user, fetchUserProject, viewProject, setViewProject}) {
    const [userProjects, setUserProjects] = useState(null);
    const [viewStage, setViewStage] = useState(null);

    useEffect(() => {
        if (user.projects) {
            setUserProjects(fetchUserProject(user.projects));
        }
        console.log('viewProject1 = ', viewProject);
    }, [user.projects]);
 


    return (
        <ScrollView>
            {!viewProject ? (
                <ScrollView>
                    {userProjects}
                </ScrollView>
            ) : (null)}
            {viewProject && !viewStage ? (
                <ScrollView>
                    <Button title='⬅' onPress={() => setViewProject(null)}/>  
                    <StagesScreen 
                        viewProject={viewProject} setViewStage={setViewStage}
                    />
                </ScrollView>
            ) : (null)}
        </ScrollView>
      );
}