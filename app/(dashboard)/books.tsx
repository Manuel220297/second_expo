import { useBooks } from '@/context/bookContext';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';

export default function BooksPage() {
  const { books, loading, getBooks } = useBooks();
  const router = useRouter();

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <View className='flex-1 dark:bg-teal-950'>
      <Text>Your Reading List</Text>
      <View className=''>
        {loading ? (
          <ActivityIndicator size={'small'} color={'#2df5da'} />
        ) : (
          <FlatList
            className='p-2'
            data={books}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
              <Pressable onPress={() => router.navigate(`/books/${item.$id}` as '/books/[id]')}>
                <View className='my-2 p-3 border-l-4 border-sky-400 mx-auto w-[90%] bg-white dark:bg-cyan-800 rounded-lg'>
                  <Text className='text-xl font-bold dark:text-white'>Title: {item.title} </Text>
                  <Text className='dark:text-white'>Author: {item.author} </Text>
                </View>
              </Pressable>
            )}
          />
        )}
      </View>
    </View>
  );
}
