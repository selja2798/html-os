import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  text: string;
};

const Button = ({ onPress, text }: ButtonProps) => (
  <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
    <Text style={styles.textButtonStyle}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#3550A1',
    padding: 16,
    margin: 20,
    alignSelf: 'stretch',
    borderRadius: 10,
  },
  textButtonStyle: { color: 'white', textAlign: 'center' },
});

export default Button;
