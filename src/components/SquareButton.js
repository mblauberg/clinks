import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, useTheme, Text } from '@ui-kitten/components';

const SquareButton = ({ text, iconName, onPress }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconName && <Icon name={iconName} fill={theme['text-basic-color']} style={styles.icon} />}
      <Text style={styles.text} category='s1'>{text}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (theme) => StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['background-basic-color-4'],
    borderRadius: 32,
    width: 110, 
    height: 110, 
    padding: 8,
    margin: 8,
  },
  icon: {
    width: 32, 
    height: 32, 
    marginBottom: 8,
  },
  text: {
    color: theme['text-basic-color'],
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SquareButton;