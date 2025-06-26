import { account } from '@/lib/appwrite';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ID, Models } from 'react-native-appwrite';

type AuthContextType = {
  user: Models.User<Models.Preferences> | undefined;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkUser: () => Promise<void>;
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
      throw Error(`Can't login ${error}`);
    }
  }
  async function register(email: string, password: string) {
    try {
      await account.create(ID.unique(), email, password);
      console.log(`Account Created Successful:\nEmail: ${email}\nPassword: ${password}`);
    } catch (error: any) {
      throw Error(error);
    }
  }
  async function logout() {
    try {
      console.log('Logout Succesful ✔');
      setUser(undefined);
      await account.deleteSession('current');
    } catch (error) {
      throw Error(`❌ Can't logout ${error}`);
    }
  }

  async function checkUser() {
    try {
      const response = await account.get();
      if (!response.email) {
        throw Error('No email found, cannot connect to appwrite');
      }
      setUser(response);
    } catch (error: any) {
      setUser(undefined);
      throw Error(error.message);
    }
  }

  useEffect(() => {
    try {
      checkUser();
    } catch (error: any) {
      console.error(error);
    }
    console.log('Initial Effect Test');
  }, []);

  return <UserContext.Provider value={{ user, login, register, logout, checkUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a ThemeProvider');
  }
  return context;
}
