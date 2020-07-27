import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import PreLoading from '../components/PreLoading';
import InputText from '../components/InputText';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from 'src/routes/AuthParamList';

const SignUpScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, 'SignUp'>;
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log('SignUp Screen');

  const registerUser = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter your email and password');
    } else {
      setIsLoading(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          res.user.updateProfile({ displayName });
          console.log('User account created & signed in!');
          setDisplayName('');
          setEmail('');
          setPassword('');
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('The email is already in use');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          console.error(error);
        });
    }
  };

  if (isLoading) {
    return <PreLoading />;
  }

  return (
    <View style={styles.container}>
      <InputText
        placeholder="Name"
        value={displayName}
        keyboardType="visible-password"
        onChangeText={setDisplayName}
      />
      <InputText
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <InputText
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={registerUser} text="Sign Up" />

      {/* <View style={styles.suggestLoginContainer}> */}
      <ButtonText
        onPress={() => {
          navigation.pop();
        }}
        text=" Already registered? Click here to Login"
      />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  textButton: { color: 'white', textAlign: 'center' },
});

export default SignUpScreen;
