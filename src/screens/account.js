import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Layout, Text, Divider, Avatar, Button, Icon, ListItem, useTheme } from "@ui-kitten/components";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import SquareButton from "../components/SquareButton";

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
  const theme = useTheme();
  const styles = createStyles(theme);

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

  const navigateFavourites = () => {
    navigation.navigate("Favourites");
  };

  const navigateRefer = () => {
    navigation.navigate("Refer");
  };

  const navigateSubmit = () => {
    navigation.navigate("Submit");
  };

  const navigateMyAccount = () => {
    navigation.navigate("MyAccount");
  };

  const navigateSettings = () => {
    navigation.navigate("Settings");
  };

  const navigateHelp = () => {
    navigation.navigate("Help");
  };

  const renderItemAccessory = (style, iconName) => <Icon {...style} name={iconName} />;

  const renderItem = (title, iconName, onPress) => (
    <ListItem
      title={title}
      accessoryLeft={(props) => renderItemAccessory(props, iconName)}
      onPress={onPress}
      style={styles.list}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar
          source={require("../../assets/account.png")}
          style={styles.avatar}
          size="giant"
        />
        <Text category="h1">{userData ? userData.fullName : "Loading..."}</Text>
      </View>
      <Layout style={styles.buttonContainer}>
        <SquareButton text="Favourites" iconName="heart" onPress={navigateFavourites} />
        <SquareButton text="Refer a friend" iconName="gift" onPress={navigateRefer} />
        <SquareButton text="Submit a venue" iconName="bulb" onPress={navigateSubmit} />
      </Layout>
      {renderItem("My Account", "person", navigateMyAccount)}
      {renderItem("Settings", "settings", navigateSettings)}
      {renderItem("Help", "question-mark-circle", navigateHelp)}
      {renderItem("Log Out", "log-out", handleLogout)}
      
    </SafeAreaView>
  );
};

const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme["background-basic-color-1"],
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
    paddingHorizontal: 8,
    marginVertical: 16,
    // height: "12%",
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
    paddingHorizontal: 16,
  },
  text: {
    textAlign: "center",
  },
});
