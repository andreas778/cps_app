import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, TouchableHighlight } from 'react-native';

export default function StagesScreen ({viewProject, setViewStage}) {
    const [viewStages, setViewStages] = useState([]);
 
    useEffect(() => {
        const getViewProject = async (stages) => {
            console.log(stages);
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
        getViewProject(viewProject.stages);
    }, []);


    return (
        <ScrollView>
           {console.log('viewProject = ', viewProject)}
           {console.log('viewstage = ', viewProject)}
           {viewStages}
        </ScrollView>
      );
}