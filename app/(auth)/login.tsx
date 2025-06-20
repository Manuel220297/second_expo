import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function LoginPage() {
  const router = useRouter();

  return (
    <View className='dark:bg-black flex-1 justify-center items-center mb-8'>
      <Text className='dark:text-white text-3xl font-bold'>Login Page</Text>
      <Pressable onPress={() => router.replace('/register')}>
        <Text className='underline'> {'-> Register Page'}</Text>
      </Pressable>
    </View>
  );
}
