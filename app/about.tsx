import { useTheme } from '@/context/themeContext';
import { databases } from '@/lib/appwrite';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function About() {
  const { theme } = useTheme();
  const [documentData, setDocumentData] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    if (theme === 'light') {
      router.replace('/login');
    }
  }, [theme]);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const database = await databases.getDocument(
          'test', // databaseId
          '685900650032410eba9c', // collectionId
          'testDocument-1' // documentId
        );
        console.log('🔴Text: ' + database.text);

        if (!database.text) {
          setDocumentData('Not found');
        } else {
          setDocumentData(database.text);
        }
      } catch (error) {
        setDocumentData(`Not found: ${error}`);
        console.error('Error fetching document:', error);
      }
    };

    fetchDocument();
  }, []);
  return (
    <View className='dark:bg-cyan-950 flex flex-col flex-1 bg-cyan-50 py-16 justify-between'>
      <Text className='dark:text-white font-black text-3xl'>About Top Page</Text>
      <Text className='dark:text-white'> Database Text: {documentData} </Text>
      <Text className='dark:text-white font-black text-3xl'>About Bottom Page</Text>
    </View>
  );
}
