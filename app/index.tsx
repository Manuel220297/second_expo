import { Image } from 'expo-image';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('@/assets/images/e1pnss.gif')}
        style={{ width: 100, height: 100 }} // Adjust as needed
      ></Image>
      <Text className='text-teal-500 font-bold text-3xl'>Typhographys</Text>
      <Text className='text-teal-400 text-xl mb-8'>Testing typhography lorem</Text>
      <View className='mt-4 py-6 px-12 bg-white rounded-lg shadow-lg'>
        <Text>Shadow Box</Text>
      </View>
    </View>
  );
}
