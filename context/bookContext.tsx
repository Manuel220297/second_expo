import { databases } from '@/lib/appwrite';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { Query } from 'react-native-appwrite';
import { useUser } from './userContext';

export type Book = {
  $id: string;
  title: string;
  author: string;
  description: string;
  userId: string;
};

type BookContextType = {
  books: Book[];
  loading: boolean;
  getBooks: () => Promise<void>;
};

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();

  const getBooks = useCallback(async () => {
    setLoading(true);
    try {
      if (!user) {
        throw Error('No user found');
      }
      const { documents } = await databases.listDocuments(
        process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.EXPO_PUBLIC_APPWRITE_COL_BOOKS_ID!,
        [Query.equal('userId', user?.$id)]
      );
      setBooks(documents as unknown as Book[]);
    } catch (err: any) {
      console.error('Error fetching books:', err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return <BookContext.Provider value={{ books, loading, getBooks }}>{children}</BookContext.Provider>;
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error('useBooks must be used within a BookProvider');
  return context;
};
