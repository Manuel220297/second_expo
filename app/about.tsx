import { useTheme } from '@/context/themeContext';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function About() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (theme === 'light') {
      router.replace('/login');
    }
  }, [theme]);

  return (
    <View className='dark:bg-cyan-950 flex flex-col flex-1 bg-cyan-50 py-16 justify-between'>
      <Text className='dark:text-white font-black text-3xl'>About Top Page</Text>
      <Text className='dark:text-white font-black text-3xl'>About Bottom Page</Text>
    </View>
  );
}
