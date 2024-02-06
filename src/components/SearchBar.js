import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Input, Layout, Text, useTheme } from "@ui-kitten/components";

const SearchBar = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <Layout style={styles.container}>
      <Input
        style={styles.searchInput}
        size="large"
        placeholder="Search..."
        accessoryLeft={(props) => <Icon {...props} name="search-outline" />}
      />
      <TouchableOpacity onPress={toggleFilter} style={styles.filterContainer}> 
        <Icon name="options-2-outline" style={styles.filterIcon} fill={theme["text-basic-color"]}/>
      </TouchableOpacity>
    </Layout>
  )
};

export default SearchBar;

const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    borderRadius: 25,
    marginRight: 8,
  },
  filterIcon: {
    width: 24,
    height: 24,
    backgroundColor: theme["background-basic-color-1"],
  },
  filterContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: theme["border-basic-color-4"],
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme["background-basic-color-1"],
  },
});
