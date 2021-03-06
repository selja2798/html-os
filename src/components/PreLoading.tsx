import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const PreLoading = () => (
  <View style={styles.preloader}>
    <ActivityIndicator size="large" color="#9E9E9E" />
  </View>
);

const styles = StyleSheet.create({
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default PreLoading;
