import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Icon } from "@ui-kitten/components";

export const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const EyeIcon = ({ secureTextEntry, toggleSecureEntry }) => (
  <TouchableWithoutFeedback onPress={toggleSecureEntry}>
    <Icon name={!secureTextEntry ? "eye" : "eye-off"} style={{ height: 24, width: 24 }} />
  </TouchableWithoutFeedback>
);
