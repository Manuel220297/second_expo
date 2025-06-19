import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name='index' options={{ title: 'Home Page' }} />
      <Stack.Screen name='about' options={{ title: 'About Page' }} />
    </Stack>
  );
}
