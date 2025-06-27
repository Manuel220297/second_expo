import { Account, Avatars, Client, Databases } from 'react-native-appwrite';

export const client = new Client()
  .setEndpoint('http://192.168.3.108/v1')
  .setProject('net-native')
  .setPlatform('second_expo-android');

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);

//'https://bd6v1hkx-80.asse.devtunnels.ms/v1'
//'192.168.3.108/v1'
