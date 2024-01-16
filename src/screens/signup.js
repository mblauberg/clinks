import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Input, Button, Layout, Text, TopNavigation, Icon } from '@ui-kitten/components';

import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '../services/firebase';

import { BackAction } from '../components/BackAction';

export const SignupScreen = ( {navigation} ) => {
  
  // Check if form is valid
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validateForm = () => {
      setIsFullNameValid(fullname !== '');
      setIsEmailValid(email !== '');
      setIsPhoneValid(phone !== '');
      setIsPasswordValid(password !== '');
      return fullname && email && phone && password;
  };

  // Asterisk for invalid fields
  const renderAsterisk = (isValid) => {
    return isValid || !isSubmitted ? null : <Text style={{color: 'red'}}>*</Text>;
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // Password hiding
  const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
  };

  const EyeIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        {...props}
        name={!secureTextEntry ? 'eye' : 'eye-off'}
      />
    </TouchableWithoutFeedback>
  );
  
  // Signup logic
  const handleSignup = () => {
    setIsSubmitted(true);
    if(validateForm()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("Registered: ", user.email);

          // Store additional user data in Firestore
          try {
            await addDoc(collection(db, "users"), {
              uid: user.uid,
              fullName: fullname,
              email: email,
              phone: phone
            });
            console.log("User data stored successfully!");
          } catch (error) {
            console.error("Error adding document: ", error);
          }

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error: ", errorCode, errorMessage);
        });
    };
  };

  // Sign user in
  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          console.log("User is signed in");
          navigation.reset({index: 0, routes: [{ name: 'Account' }]});
        } else {
          // User is signed out
          console.log("User is signed out");
        }
      });
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TopNavigation
      alignment='center'
      accessoryLeft={() => BackAction(navigation)}
      />
      <Layout style={styles.container}>
        <Text style={styles.title} category='h4'>Sign Up</Text>
        <Input
            value={fullname}
            placeholder='Full Name'
            onChangeText={setFullname}
            style={styles.input}
            accessoryLeft={<Icon name='person' />}
            accessoryRight={() => renderAsterisk(isFullNameValid)}
        />
        <Input
            value={email}
            placeholder='Email'
            onChangeText={setEmail}
            style={styles.input}
            accessoryLeft={<Icon name='email' />}
            accessoryRight={() => renderAsterisk(isEmailValid)}
        />
        <Input
            value={phone}
            placeholder='Phone number'
            onChangeText={setPhone}
            style={styles.input}
            accessoryLeft={<Icon name='phone' />}
            accessoryRight={() => renderAsterisk(isPhoneValid)}
        />
        <Input
            value={password}
            placeholder='Password'
            secureTextEntry={secureTextEntry}
            onChangeText={setPassword}
            style={styles.input}
            accessoryLeft={<Icon name='lock' />}
            accessoryRight={<EyeIcon secureTextEntry={secureTextEntry} toggleSecureEntry={toggleSecureEntry} /> }
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
        padding: 24,
      },
      title: {
        marginVertical: 12,
        textAlign: 'left',
        width: '100%',
      },
      input: {
        marginVertical: 4,
        width: '100%',
        borderRadius: 12,
      },
      signupButton: {
        marginVertical: 12,
        width: '100%',
        borderRadius: 12,
      },
})