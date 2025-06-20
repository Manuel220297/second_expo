import React from 'react';
import { Text, View } from 'react-native';

export default function ProfilePage() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-3xl font-bold'>Create Books:</Text>
      <Text className='text-xl font-medium text-stone-600'>Create some books</Text>
    </View>
  );
}
