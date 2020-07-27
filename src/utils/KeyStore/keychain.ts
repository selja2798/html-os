import * as Keychain from 'react-native-keychain';

export const reset = async () => {
  await Keychain.resetGenericPassword();
};
export const storeKeyStore = async (
  emailStore: string,
  passwordStore: string,
) => {
  // Store the credentials
  await Keychain.setGenericPassword(emailStore, passwordStore);
};

export const retrieveKeyStore = async () => {
  try {
    // Retrieve the credentials
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log(
        `Credentials successfully loaded for user \n Email: ${credentials.username}\n Password: ${credentials.password}`,
      );
      return credentials;
    } else {
      console.log('No credentials stored');
    }
  } catch (error) {
    console.log("Keychain couldn't be accessed!", error);
  }
};
