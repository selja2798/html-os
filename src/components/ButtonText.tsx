import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

type ButtonTextProps = {
  onPress: () => void;
  text: string;
};

const ButtonText = ({ onPress, text }: ButtonTextProps) => (
  <TouchableOpacity style={styles.buttonTextStyle} onPress={onPress}>
    <Text style={styles.textStyle}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonTextStyle: { alignSelf: 'center', padding: 10 },
  textStyle: { color: 'blue', padding: 6 },
});

export default ButtonText;
