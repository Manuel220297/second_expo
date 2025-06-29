import UserOnly from '@/components/UserOnly';
import { BookProvider } from '@/context/bookContext';
import { useTheme } from '@/context/themeContext';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';

export default function DashboardLayout() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  const tabBarStyle: ViewStyle = {
    backgroundColor: isDark ? '#00836d' : '#9affe6',

    borderTopColor: isDark ? '#ff0000' : '#ff0000',
  };

  return (
    <BookProvider>
      <UserOnly>
        <Tabs
          screenOptions={{
            headerRight: () => (
              <TouchableOpacity onPress={toggleTheme} className='mr-4 px-4 py-2 bg-white rounded-lg shadow'>
                <Text className='text-black'>Toggle</Text>
              </TouchableOpacity>
            ),
            headerStyle: { backgroundColor: '#0bc9a9' },
            headerTintColor: '#fff',
            tabBarStyle,
            tabBarActiveTintColor: isDark ? '#fff' : '#000',
            tabBarInactiveTintColor: isDark ? '#aaa' : '#555',
          }}>
          <Tabs.Screen
            name='profile'
            options={{
              title: 'Profile',
              tabBarIcon: ({ focused }) => <Ionicons size={24} name={focused ? 'person' : 'person-outline'} />,
            }}
          />
          <Tabs.Screen
            name='books'
            options={{
              title: 'Books',
              tabBarIcon: ({ focused }) => <Ionicons size={24} name={focused ? 'book' : 'book-outline'} />,
            }}
          />
          <Tabs.Screen
            name='create'
            options={{
              title: 'Create',
              tabBarIcon: ({ focused }) => <Ionicons size={24} name={focused ? 'create' : 'create-outline'} />,
            }}
          />

          <Tabs.Screen
            name='books/[id]'
            options={{
              href: null,
            }}
          />
        </Tabs>
      </UserOnly>
    </BookProvider>
  );
}
