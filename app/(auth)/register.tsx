import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function RegisterPage() {
  return (
    <View className='dark:bg-black flex-1 justify-center items-center'>
      <Text className='dark:text-white'>RegisterPage</Text>
      <Link href={'/login'}>
        <Text>Login Page</Text>
      </Link>
    </View>
  );
}
