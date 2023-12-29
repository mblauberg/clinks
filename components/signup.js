import React, { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet } from 'react-native';
import { Input, Button, Layout, Text } from '@ui-kitten/components';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');

    const handleSignup = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("Registered: ", user.email);
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
              <Text style={styles.title} category='h4'>Sign Up</Text>
              <Input
                  value={fullname}
                  placeholder='Full Name'
                  onChangeText={setFullname}
                  style={styles.input}
              />
              <Input
                  value={email}
                  placeholder='Email'
                  onChangeText={setEmail}
                  style={styles.input}
              />
              <Input
                  value={phone}
                  placeholder='Phone number'
                  onChangeText={setPhone}
                  style={styles.input}
              />
              <Input
                  value={password}
                  placeholder='Password'
                  secureTextEntry={true}
                  onChangeText={setPassword}
                  style={styles.input}
              />
              <Button onPress={handleSignup} style={styles.signupButton}>
                  Sign Up
              </Button>
            </Layout>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
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
      signupButton: {
        marginVertical: 12,
        width: '100%',
        borderRadius: 8,
      },
})