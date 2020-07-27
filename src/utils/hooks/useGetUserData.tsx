import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useState, useEffect } from 'react';

export default () => {
  const [userData, setUserData] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    setUserData(auth().currentUser);
  }, []);

  return userData;
};
