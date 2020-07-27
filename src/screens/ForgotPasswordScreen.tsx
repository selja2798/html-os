import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../components/Button';
import InputText from '../components/InputText';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from 'src/routes/AuthParamList';

const ForgotPasswordScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, 'ForgotPassword'>;
}) => {
  const [email, setEmail] = useState<string>('');

  console.log('ForgotPassword Screen');

  const forgotPassword = () => {
    if (email) {
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          console.log(email);
          setEmail('');
          Alert.alert('Please check your gmail...');
          navigation.goBack();
        })
        .catch(function (error) {
          if (error.code === 'auth/invalid-email') {
          }
          console.log(error);
        });
    } else {
      Alert.alert('Email is empty.');
    }
  };

  return (
    <View style={styles.container}>
      <InputText
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Button onPress={forgotPassword} text="Forgot Password" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default ForgotPasswordScreen;
