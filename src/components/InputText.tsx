import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type InputTextProps = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
  secureTextEntry?: boolean | undefined;
};

const InputText = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
}: InputTextProps) => (
  <TextInput
    style={styles.textInput}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    value={value}
    autoCapitalize="none"
    keyboardType={keyboardType}
    onChangeText={onChangeText}
  />
);

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    margin: 20,
    fontSize: 16,
  },
});

export default InputText;
