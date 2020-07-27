import auth from '@react-native-firebase/auth';
import { reset } from '../../utils/KeyStore/keychain';

export const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      console.log('User signed out!');
      reset();
    });
};
