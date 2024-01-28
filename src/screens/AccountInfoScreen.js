import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Layout, Text, ListItem, Icon, TopNavigation, useTheme } from "@ui-kitten/components";
import { auth, fetchUserData } from "../services/Firebase";
import BackAction from "../components/BackAction";



export const AccountInfoScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  // Get user data from Firebase
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (auth.currentUser) {
      fetchUserData(auth.currentUser.uid).then((data) => {
        console.log("Fetched user data: ", data);
        setUserData(data); // Set the user data state with the fetched data
      });
    } else {
      // User is not logged in, redirect to login screen or take any other action
      navigation.reset({ index: 0, routes: [{ name: "Login" }] });
    }
  }, [auth.currentUser]);

  const renderItem = (title, description, iconName, onPress) => (
    <ListItem
      title={title}
      description={description}
      accessoryLeft={<Icon name={iconName} />}
      accessoryRight={<Icon name="arrow-ios-forward" />}
      onPress={onPress}
      style={styles.list}
    />
  );

  const handlePress = (service) => {
    console.log(`Button pressed for: ${service}`);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <TopNavigation
        alignment="center"
        accessoryLeft={() => BackAction(navigation)}
      />
      <ScrollView style={styles.container}>

        <Text style={styles.titleText} category="h1">Account Info</Text>
        {userData && renderItem("Full Name ", userData.fullName, "person", handlePress("fullName"))}
        {userData && renderItem("Phone number ", userData.phone, "phone", handlePress("phone"))}
        {userData && renderItem("Email ", userData.email, "email", handlePress("email"))}
        {renderItem("Password ", "********", "lock", handlePress("password"))}
        
        <Text style={styles.text} category="h6">Connected social apps</Text>
        {/* TODO: Add social apps here */}

      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountInfoScreen;

const createStyles = (theme) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme["background-basic-color-1"],
    },
    scrollContainer: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: theme["background-basic-color-1"],
    },
    titleText: {
      marginVertical: 8,
      marginHorizontal: 16,
    },
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },
    list: {
      marginVertical: 4,
    },
    text: {
      marginVertical: 8,
      marginTop: 32,
      marginHorizontal: 16,
    },
  });
