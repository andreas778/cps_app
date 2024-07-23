import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function ProjectsScreen ({user, fetchUserProject}) {
    const [userProjects, setUserProjects] = useState(null);

    useEffect(() => {
        setUserProjects(fetchUserProject(user.projects));
    }, [user.projects]);
 


    return (
        <View>
            {userProjects}
        </View>
      );
}