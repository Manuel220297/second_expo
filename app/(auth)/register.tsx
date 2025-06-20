import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function RegisterPage() {
  const router = useRouter();

  return (
    <View className='dark:bg-black flex-1 justify-center items-center mb-8'>
      <Text className='dark:text-white text-3xl font-bold'>Register Page</Text>
      <Pressable onPress={() => router.replace('/login')}>
        <Text className='underline'> {'-> Login Page'}</Text>
      </Pressable>
    </View>
  );
}
