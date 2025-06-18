import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text className='text-red-500 font-bold text-3xl'>Typhography</Text>
      <Text className='text-red-400 text-xl mb-8'>Testing typhography lorem</Text>
      <View className='mt-4 py-6 px-12 bg-white rounded-lg shadow-lg'>
        <Text>Shadow Box</Text>
      </View>
    </View>
  );
}
