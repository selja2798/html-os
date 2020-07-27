import { useEffect, useState } from 'react';
import FingerprintScanner, {
  AuthenticateAndroid,
} from 'react-native-fingerprint-scanner';
import { Alert } from 'react-native';

export default function useFingerprint() {
  const [biometryType, setBiometryType] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const fingerprintConfig: AuthenticateAndroid = {
    title: 'Log In',
    subTitle: 'to get in',
    description: 'testing',
    cancelButton: 'cancel',
    onAttempt: () => null,
  };

  useEffect(() => {
    isFingerprintAvailable();
    return FingerprintScanner.release();
  }, []);

  const isFingerprintAvailable = async () => {
    try {
      const isAvailable = await FingerprintScanner.isSensorAvailable();
      setBiometryType(isAvailable);
    } catch (error) {
      setErrorMessage(error.name);
    }
  };

  if (biometryType) {
    console.log('lanjut bang');
    FingerprintScanner.authenticate(fingerprintConfig).then(() =>
      Alert.alert('Authentication Successfully'),
    );
  }
}
