import { ThemeProvider } from '@/context/themeContext';
import { Stack } from 'expo-router';
import './globals.css';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#0bc9a9' },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name='index' options={{ title: 'Home Page' }} />
        <Stack.Screen name='about' options={{ title: 'About Page' }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
