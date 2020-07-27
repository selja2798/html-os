import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import InputText from '../components/InputText';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';
import PreLoading from '../components/PreLoading';
import { AuthNavProps } from 'src/routes/AuthParamList';

const LoginScreen = ({ navigation, route }: AuthNavProps<'Login'>) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log('Login Screen');

  const login = () => {
    if (
      (email === '' && password === '') ||
      email.length === 0 ||
      password.length === 0
    ) {
      Alert.alert('Enter your email and password');
    } else {
      setIsLoading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account log in');
          setEmail('');
          setPassword('');
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
            setIsLoading(false);
          }
          if (error.code === 'auth/wrong-password') {
            Alert.alert('Wrong password');
            setIsLoading(false);
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
      {route.name ? null : <Text>{route.name}</Text>}
      <InputText
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <InputText
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button text="Log in" onPress={login} />
      {/* <Button
        text="Fingerprint"
        onPress={() => navigation.navigate('Fingerprint')}
      /> */}
      <ButtonText
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}
        text="Forgot Password"
      />
      <ButtonText
        onPress={() => {
          navigation.navigate('SignUp');
        }}
        text="Don't have account? Click here to Sign Up"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',

    alignSelf: 'stretch',
  },
});

export default LoginScreen;
