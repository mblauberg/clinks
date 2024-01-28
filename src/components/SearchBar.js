import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Input, Layout, Text, useTheme } from "@ui-kitten/components";

const FilterIcon = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <Icon {...props} name="options-2" />
  </TouchableOpacity>
);

const SearchBar = () => {
  const theme = useTheme();
  styles = createStyles(theme);

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <Layout style={styles.searchContainer}>
      <Input
        style={styles.searchInput}
        placeholder="Search..."
        accessoryLeft={(props) => <Icon {...props} name="search-outline" />}
        accessoryRight={(props) => <FilterIcon {...props} onPress={toggleFilter} />}
      />
      {isFilterVisible && (
        <Layout style={styles.filterContainer}>
          {/* Filter options */}
          <Text>Filter options...</Text>
        </Layout>
      )}
    </Layout>
)};

export default SearchBar;

const createStyles = (theme) => StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  searchInput: {
    width: "100%",
    borderRadius: "100%",
  },
  filterContainer: {
    marginTop: 4,
    padding: 8,
    width: "100%",
    borderRadius: 8,
    backgroundColor: theme["background-basic-color-2"],
  },
});
