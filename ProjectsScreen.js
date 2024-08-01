import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';

export default function ProjectsScreen ({user, fetchUserProject}) {
    const [userProjects, setUserProjects] = useState(null);

    useEffect(() => {
        setUserProjects(fetchUserProject(user.projects));
    }, [user.projects]);
 


    return (
        <ScrollView>
            {userProjects}
        </ScrollView>
      );
}