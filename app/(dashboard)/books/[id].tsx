import { Book, useBooks } from '@/context/bookContext';
import { databases } from '@/lib/appwrite';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BookDetails() {
  const { id } = useLocalSearchParams();
  const [book, setBook] = useState<Book | undefined>(undefined);
  const router = useRouter();
  const { getBooks } = useBooks();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookData = await databases.getDocument(
          process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
          process.env.EXPO_PUBLIC_APPWRITE_COL_BOOKS_ID,
          id as string
        );
        setBook(bookData as unknown as Book);
      } catch (err: any) {
        console.error(err);
      }
    };

    fetchData();
    console.log(book?.author);
  }, [id]);

  async function handleDelete() {
    try {
      await databases.deleteDocument(
        process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.EXPO_PUBLIC_APPWRITE_COL_BOOKS_ID,
        id as string
      );
      router.back();
      await getBooks();
      console.log('Delete succesful');
    } catch (err: any) {
      console.error(err.message);
    }
  }

  return (
    <SafeAreaView className='flex-1 flex items-center justify-center my-8 py-8 bg-slate-200'>
      {book && <Text> {book.description} </Text>}
      <TouchableOpacity className='bg-red-500 w-[80%] rounded-md p-4 mx-2 my-8' onPress={handleDelete}>
        <Text className='text-center font-bold text-white text-xl'>Delete</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
