import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';

export default function ProfileScreen ({user, logOut}) {

    return (
        <ScrollView>
          <Text> Email: {user.email} </Text>
          <Text> Role: {user.role} </Text>
          <Text> Id: {user['id']} </Text>
          <Button title="Log Out" onPress={logOut} />
        </ScrollView>
      );
}