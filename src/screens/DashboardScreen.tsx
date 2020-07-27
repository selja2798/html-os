import React from 'react';
import { signOut } from '../services/api/firebase-helper';
import { StyleSheet, View, Text } from 'react-native';
import useGetUserData from '../utils/hooks/useGetUserData';
import Button from '../components/Button';

const DashboardScreen = () => {
  console.log('Dashboard Screen');
  const userData = useGetUserData();

  if (!userData) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>UID: {userData.uid}</Text>
      <Text>Email: {userData.email}</Text>
      <Button text="Log Out" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default DashboardScreen;
