import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Layout, Text, Divider, Avatar, Button, Icon, ListItem } from "@ui-kitten/components";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";

const fetchUserData = async (userId) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists) {
      console.log(userDoc.data());
      return userDoc.data(); // This will return the user data object
    } else {
      console.log("No user data found!");
      return null; // Handle the case where the user data doesn't exist
    }
  } catch (error) {
    console.error("Error fetching user data: ", error);
    return null; // Handle the error appropriately
  }
};

export const AccountScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      fetchUserData(auth.currentUser.uid).then((data) => {
        console.log(auth.currentUser.uid);
        console.log(auth.currentUser);
        console.log("Fetched user data: ", data);
        setUserData(data); // Set the user data state with the fetched data
      });
    } else {
      // User is not logged in, redirect to login screen or take any other action
      navigation.reset({ index: 0, routes: [{ name: "Login" }] });
    }
  }, [auth.currentUser]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.reset({ index: 0, routes: [{ name: "Login" }] });
        console.log("Logged out");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const renderItemAccessory = (style, iconName) => <Icon {...style} name={iconName} />;

  const renderItem = (title, iconName) => (
    <ListItem title={title} accessoryLeft={(props) => renderItemAccessory(props, iconName)} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />
      <Layout style={accountStyles.container}>
        <View style={accountStyles.headerContainer}>
          <Avatar
            source={require("../../assets/account.png")}
            style={accountStyles.avatar}
            size="giant"
          />
          <Text category="h1">{userData ? userData.fullName : "Loading..."}</Text>
        </View>
        <Layout style={accountStyles.buttonContainer}>
          <Button style={accountStyles.button} accessoryLeft={<Icon name="heart" />}>
            <Text style={accountStyles.text} category="s1">
              {" "}
              Favourites{" "}
            </Text>
          </Button>
          <Button style={accountStyles.button} accessoryLeft={<Icon name="gift" />}>
            <Text style={accountStyles.text} category="s1">
              {" "}
              Refer a friend{" "}
            </Text>
          </Button>
          <Button style={accountStyles.button} accessoryLeft={<Icon name="bulb" />}>
            Submit a venue
          </Button>
        </Layout>
        <Divider />
        {renderItem("My Account", "person")}
        {renderItem("Settings", "settings")}
        {renderItem("Help", "question-mark-circle")}
        <Button
          style={accountStyles.list}
          accessoryLeft={<Icon name="log-out" />}
          appearance="ghost"
          onPress={handleLogout}
        >
          Logout
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 32,
  },
  avatar: {
    width: 124,
    height: 124,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 12,
    height: "12%",
  },
  button: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 4,
    marginHorizontal: 8,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flexDirection: "row",
    justifyContent: "left",
    marginVertical: 12,
  },
  text: {
    textAlign: "center",
  },
});
