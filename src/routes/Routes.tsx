import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import { AuthParamList } from './AuthParamList';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Stack = createStackNavigator<AuthParamList>();

type User = {
  user: FirebaseAuthTypes.User | null;
};

const Routes = ({ user }: User) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3550A1',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        {user ? (
          <>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            {/* <Stack.Screen name="Fingerprint" component={BiometricPopup} /> */}
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
