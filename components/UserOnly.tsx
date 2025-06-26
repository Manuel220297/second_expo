import { useUser } from '@/context/userContext';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

const UserOnly = ({ children }: Props) => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user]);

  return children;
};

export default UserOnly;
