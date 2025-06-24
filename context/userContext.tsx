import { account } from '@/lib/appwrite';
import React, { createContext, useContext, useState } from 'react';
import { ID, Models } from 'react-native-appwrite';

type AuthContextType = {
  user: Models.User<Models.Preferences> | undefined;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<AuthContextType | undefined>(undefined);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | undefined>(undefined);

  async function login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error: any) {
      console.log(`Can't login ${error}`);
    }
  }
  async function register(email: string, password: string) {
    try {
      await account.create(ID.unique(), email, password);
      console.log(`Account Created Successful:\nEmail: ${email}\nPassword: ${password}`);
    } catch (error: any) {
      console.error('Error creating account: ', error);
    }
  }
  async function logout() {
    try {
      console.log('Logout Succesful ✔');
      setUser(undefined);
      await account.deleteSession('current');
    } catch (error) {
      console.log(`❌ Can't logout ${error}`);
    }
  }

  return <UserContext.Provider value={{ user, login, register, logout }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a ThemeProvider');
  }
  return context;
}
