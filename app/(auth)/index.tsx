import Btn from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import RootSafeView from '@/components/UI/RootSafeView';
import TextFont from '@/components/UI/TextFont';
import { CAMERA } from '@/constants/images';
import { Image, ScrollView, View } from 'react-native';

const Index = () => {
  return (
    <RootSafeView className='h-full justify-center'>
      {/* parent of the the center */}
      <ScrollView>
        <View className='min-h-[85vh] justify-center px-8 my-6 w-full gap-y-4'>
          <View className='py-10'>
            <Image
            source={CAMERA}
            resizeMode='center'
            className='w-full h-40'
            />
            <TextFont className='text-center text-4xl' fontType='Bold'>Welcome Back!!!</TextFont>
          </View>
          {/* the parents of bottom place */}
          <View className='flex flex-col gap-y-4'>
            <Input 
            value=''
            placeholder='email'
            onChangeText={() => {}}
            />
            <Input 
            value=''
            placeholder='password'
            onChangeText={() => {}}
            />
          </View>
          <Btn
            className='items-center'
            functionality={() => {}}
            >
            Sign In
          </Btn>
        </View>
      </ScrollView>
    </RootSafeView>
  );
}

export default Index;
