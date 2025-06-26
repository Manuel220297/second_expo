import { useUser } from '@/context/userContext';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  const { user } = useUser();

  // if (user) {
  //   return <Redirect href='/profile' />;
  // }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}></Stack>
  );
}
