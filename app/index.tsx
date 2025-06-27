import { useTheme } from '@/context/themeContext';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View className='flex-1 justify-center items-center dark:bg-black'>
      <Text className='text-teal-500 font-extrabold text-4xl'>{`${theme.at(0)?.toUpperCase() + theme.slice(1, theme.length)} Theme`}</Text>
      <Image source={require('@/assets/images/e1pnss.gif')} style={{ width: 100, height: 100, marginTop: 48 }}></Image>
      <Text className='text-teal-500 font-bold text-3xl'>Typhographys</Text>
      <Text className='text-teal-400 text-xl mb-8'>Testing typhography lorem</Text>
      <Link href={'/about'} asChild>
        <TouchableOpacity className='mt-4 py-6 px-12 bg-white rounded-lg shadow-lg dark:shadow-white'>
          <Text>Login</Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity onPress={toggleTheme} className='mt-4 py-6 px-12 bg-white rounded-lg shadow-lg'>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
      <Link href={'/profile'}>
        <Text>Books Page</Text>
      </Link>
    </View>
  );
}
