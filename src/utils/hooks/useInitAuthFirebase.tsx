import { useState, useEffect } from 'react';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export default () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  function onAuthStateChanged(userAuth: FirebaseAuthTypes.User | null) {
    setUser(userAuth);
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user;
};
