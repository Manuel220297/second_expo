import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterPage() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();

  return (
    <View className='dark:bg-black flex-1 justify-center items-center mb-8'>
      <Text className='dark:text-white text-3xl font-bold'>Register Page</Text>
      <Pressable onPress={() => router.replace('/login')}>
        <Text className='underline'> {'-> Login Page'}</Text>
      </Pressable>
      <TextInput
        value={email}
        onChangeText={setEmail}
        className='bg-gray-200 w-[80%] rounded-md p-4 m-2'
        placeholder='Email'></TextInput>
      <TextInput
        value={password}
        onChangeText={setPassword}
        className='bg-gray-200 w-[80%] rounded-md p-4 m-2'
        placeholder='Password'
        secureTextEntry={true}></TextInput>
      <TouchableOpacity
        className='bg-teal-500 w-[80%] rounded-md p-4 m-2'
        onPress={() => console.log(`\nEmail: ${email}\nPassword: ${password}`)}>
        <Text className='text-center font-bold text-white text-xl'>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
