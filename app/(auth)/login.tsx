import { useUser } from '@/context/userContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginPage() {
  const { user, login, logout, checkUser } = useUser();
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();

  async function handleLogin() {
    setError(null);
    try {
      if (!email || !password) {
        throw Error('There must be email and password');
      }
      await login(email, password);
    } catch (err: any) {
      console.error(`Error login login.tsx: ${err}`);
      setError(err.message);
    }
  }
  async function handleLogout() {
    try {
      await logout();
    } catch (error: any) {
      console.error(`Error login login.tsx: ${error}`);
    }
  }

  async function handleCheckUser() {
    try {
      console.log(`\nEmail: ${email}\nPassword: ${password}\nUser: ${JSON.stringify(user, null, 2)}`);
      checkUser();
    } catch (error: any) {
      console.error(`Error checking user ${error}`);
    }
  }

  return (
    <View className='dark:bg-black flex-1 justify-center items-center mb-8'>
      {user && <Text className='text-lg text-emerald-500 font-semibold'>Welcome {(user as any).email} </Text>}
      <Text className='dark:text-white text-3xl font-bold'>Login Page</Text>
      {!user ? (
        <Pressable onPress={() => router.replace('/register')}>
          <Text className='underline'> {'-> Register Page'}</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            const canGoBack = router.canGoBack?.();
            if (canGoBack) {
              router.back();
            } else {
              router.replace('/');
            }
          }}>
          <Text className='underline'> {'-> Home Page'}</Text>
        </Pressable>
      )}

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
      {!user ? (
        <TouchableOpacity className='bg-teal-500 w-[80%] rounded-md p-4 m-2' onPress={handleLogin}>
          <Text className='text-center font-bold text-white text-xl'>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity className='bg-teal-500 w-[80%] rounded-md p-4 m-2' onPress={handleLogout}>
          <Text className='text-center font-bold text-white text-xl'>Logout</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity className='bg-teal-500 w-[80%] rounded-md p-4 m-2' onPress={handleCheckUser}>
        <Text className='text-center font-bold text-white text-xl'>See user</Text>
      </TouchableOpacity>
      {error && (
        <View className='bg-red-100 border-2 border-red-700 w-[80%] rounded-md p-4 m-2'>
          <Text className='text-red-500'>{error}</Text>
        </View>
      )}
    </View>
  );
}
