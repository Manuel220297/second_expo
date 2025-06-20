import { useTheme } from '@/context/themeContext';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function BooksPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View>
      <Text>Your Reading List</Text>
      <TouchableOpacity onPress={toggleTheme} className='mt-4 py-6 px-12 bg-white rounded-lg shadow-lg'>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}
