import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Input, Button, Layout, Text, Icon } from "@ui-kitten/components";
import { auth } from "../services/Firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const navigateSignup = () => {
    navigation.navigate("Signup");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const EyeIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={!secureTextEntry ? "eye" : "eye-off"} />
    </TouchableWithoutFeedback>
  );

  const handleLogin = () => {
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        navigation.reset({ index: 0, routes: [{ name: "Account" }] });
      } else {
        // User is signed out
      }
    });
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <Layout style={styles.container}>
          <Text style={styles.title} category="h4">
            Login
          </Text>
          <Input
            value={email}
            placeholder="Email"
            onChangeText={setEmail}
            style={styles.input}
            accessoryLeft={<Icon name="email" />}
          />
          <Input
            value={password}
            placeholder="Password"
            secureTextEntry={secureTextEntry}
            onChangeText={setPassword}
            style={styles.input}
            accessoryLeft={<Icon name="lock" />}
            accessoryRight={EyeIcon}
          />
          <Button onPress={handleLogin} style={styles.signInButton}>
            Sign in
          </Button>
          <Layout style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <Button appearance="ghost" style={styles.forgotButton}>
              Forgot password
            </Button>
            <Button appearance="ghost" style={styles.signUpButton} onPress={navigateSignup}>
              Sign up
            </Button>
          </Layout>
        </Layout>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    marginVertical: 12,
    textAlign: "left",
    width: "100%",
  },
  input: {
    marginVertical: 4,
    width: "100%",
    borderRadius: 12,
  },
  signInButton: {
    marginVertical: 12,
    width: "100%",
    borderRadius: 12,
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
