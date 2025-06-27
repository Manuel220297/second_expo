import { useBooks } from '@/context/bookContext';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function BooksPage() {
  const { books, loading, getBooks } = useBooks();

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <View>
      <Text>Your Reading List</Text>
      <View className='mx-auto w-[80%] bg-white rounded-lg shadow-lg'>
        {loading ? (
          <ActivityIndicator size={'small'} color={'#2df5da'} />
        ) : (
          <FlatList
            className='p-2'
            data={books}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
              <View className='bg-blue-200 my-2 p-1'>
                <Text>Title: {item.title} </Text>
                <Text>Author: {item.author} </Text>
                <Text>Description: {item.description} </Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}
