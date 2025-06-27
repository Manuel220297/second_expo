import { useBooks } from '@/context/bookContext';
import { useUser } from '@/context/userContext';
import { databases } from '@/lib/appwrite';
import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ID } from 'react-native-appwrite';

export default function ProfilePage() {
  const { user } = useUser();
  const { getBooks } = useBooks();
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const data = {
    title: title,
    author: author,
    description: description,
    userId: user?.$id,
  };

  async function handleCreateBook() {
    setLoading(true);
    setError(null);
    console.log(data);
    try {
      if (!data.userId) {
        throw Error('No account found, cannot create books');
      }
      if (!data.title) {
        throw Error('Enter Title');
      }
      if (!data.author) {
        throw Error('Enter Author');
      }
      if (!data.description) {
        throw Error('Enter Description');
      }
      const response = await databases.createDocument('shelfie-db', 'booksCollection', ID.unique(), data);

      await getBooks();
      console.log(response);
      setTitle('');
      setAuthor('');
      setDescription('');
    } catch (err: any) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-3xl font-bold'>Create Books:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        className='bg-gray-200 w-[80%] rounded-md p-4 m-2'
        placeholder='Title'
      />
      <TextInput
        value={author}
        onChangeText={setAuthor}
        className='bg-gray-200 w-[80%] rounded-md p-4 m-2'
        placeholder='Author'
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        className='bg-gray-200 w-[80%] rounded-md h-[25%] p-4 m-2'
        style={{ textAlignVertical: 'top' }}
        multiline={true}
        placeholder='Description'
      />
      <Text className='text-xl font-medium text-stone-600'>Create some books</Text>
      <TouchableOpacity className='bg-teal-500 w-[80%] rounded-md p-4 m-2' onPress={handleCreateBook}>
        <Text className='text-center font-bold text-white text-xl'>
          {loading ? <ActivityIndicator size={'small'} color={'#fff'} /> : 'Create Books'}{' '}
        </Text>
      </TouchableOpacity>
      {error && (
        <View className='bg-red-100 border-2 border-red-700 w-[80%] rounded-md p-4 m-2'>
          <Text className='text-red-500'>{error}</Text>
        </View>
      )}
    </View>
  );
}
