import { SafeAreaView } from 'react-native-safe-area-context';
import TextFont from '../components/UI/TextFont';
import { View, Image, Alert } from 'react-native';
import Btn from '../components/UI/Button';
import { useState } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

const Index = () => {
  const [permission , setPermission] = useCameraPermissions()
  const [face , setFace] = useState<CameraType>('back')

  if(!permission)
    return <View />



  return (
    <SafeAreaView className='bg-primary flex-1'>
      <TextFont className='text-center text-3xl py-3'>
        Confirm The Order
      </TextFont>
      <TextFont className='text-center'>
        scan the QR
      </TextFont>
      <View className='flex-1 justify-center items-center'>
        <Image 
        source={require('@/assets/images/general/scanQr.png')}
        resizeMode='contain'
        className='w-full'
        />

        {
          !permission.granted ? 
            (
            <Btn functionality={setPermission}>
              Give permission
            </Btn>
            )
          :
            (
            <Btn functionality={() => {}}>
              Scan Now
            </Btn>
            )
        }

      </View>
    </SafeAreaView>
  );
}


export default Index;
