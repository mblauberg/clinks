import React, { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet } from 'react-native';
import { Input, Button, Layout, Text } from '@ui-kitten/components';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginScreen = ( {navigation} ) => {

  const navigateSignup = () => {
    navigation.navigate('Signup');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("Logged in with: ", user.email);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error: ", errorCode, errorMessage);
      });
  };

  return (
      <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
          <Layout style={styles.container}>
            <Text style={styles.title} category='h4'>Login</Text>
            <Input
                value={email}
                placeholder='Email'
                onChangeText={setEmail}
                style={styles.input}
            />
            <Input
                value={password}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={setPassword}
                style={styles.input}
            />
            <Button onPress={handleLogin} style={styles.signInButton}>
                Sign in
            </Button>
            <Layout style={{ flexDirection: 'row', justifyContent:'space-between', width: '100%' }}>
                <Button appearance='ghost' style={styles.forgotButton}>
                    Forgot password
                </Button>
                <Button appearance='ghost' style={styles.signUpButton} onPress={navigateSignup} >
                    Sign up
                </Button>
            </Layout>
          </Layout>
      </KeyboardAvoidingView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    marginVertical: 12,
    textAlign: 'left',
    width: '100%',
  },
  input: {
    marginVertical: 4,
    width: '100%',
    borderRadius: 8,
  },
  signInButton: {
    marginVertical: 12,
    width: '100%',
    borderRadius: 8,
  },
  forgotButton: {
    marginVertical: 4,
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 4,
    paddingHorizontal: 0,
  },
});
