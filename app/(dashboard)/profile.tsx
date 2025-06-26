import { useUser } from '@/context/userContext';
import React from 'react';
import { Text, View } from 'react-native';

export default function ProfilePage() {
  const { user } = useUser();

  return (
    <View>
      <Text className='text-3xl font-bold'>Your Email: {user?.email} </Text>
      <Text className='text-xl font-medium text-stone-600'>Time to read some books</Text>
    </View>
  );
}
