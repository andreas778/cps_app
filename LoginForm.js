import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';


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
      <Text>Log In</Text>
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
      <Button title="Log In" onPress={handleLogIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
