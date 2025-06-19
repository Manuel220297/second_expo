import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function LoginPage() {
  return (
    <View className='dark:bg-black flex-1 justify-center items-center mb-8'>
      <Text className='dark:text-white text-3xl font-bold'>LoginPage</Text>
      <Link href={'/register'}>
        <Text className='underline'> {'-> Register Page'}</Text>
      </Link>
    </View>
  );
}
