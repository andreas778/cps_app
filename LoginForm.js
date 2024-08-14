import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableHighlight } from 'react-native';


export default function LoginForm({onLoginSuccess}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogIn = async () => {
    const error = await onLoginSuccess(email.toLowerCase(), password);
    setError(error);
  }

  return (
    <View style={styles.container}>
      {/*<Text>Log In</Text>*/}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.login}>
      <Button title="Log In" color='black'  onPress={handleLogIn}/>
      {/*<TouchableHighlight  onPress={handleLogIn}>
        <Text>Log In</Text>
      </TouchableHighlight>*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: '10%',
    paddingRight: '20%',
    width: '50%',
    text: 'bold',
  },
  login: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  error: {
    color: 'red',
    marginBottom: '10%',
  },
});