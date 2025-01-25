import { SafeAreaView } from 'react-native-safe-area-context';
import TextFont from '../components/UI/TextFont';
import { View, Image, Linking, AppState, StatusBar, Platform } from 'react-native';
import Btn from '../components/UI/Button';
import { useEffect, useRef, useState } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { TextBtn } from '../components/UI/Button';

const Index = () => {
  const [permission , setPermission] = useCameraPermissions()
  const [face , setFace] = useState<CameraType>('back')
  const [notUsingCamera , setNotUsingCamera] = useState(true)

  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if(!permission)
    return <View />


  function toggleCameraFacing() {
    setFace(current => (current === 'back' ? 'front' : 'back'));
  }


  if(notUsingCamera)
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
              <Btn functionality={() => setNotUsingCamera(false)}>
                Scan Now
              </Btn>
              )
          }
      </View>
    </SafeAreaView>
  );

  return(
    <View className='flex-1'>
      {Platform.OS === "android" ? <StatusBar hidden /> : null}
      <CameraView 
      onBarcodeScanned={({ data }) => {
        if(data && !qrLock.current){
          setTimeout(async () => {
            await Linking.openURL(data);
          }, 300)
        }
      }}
      barcodeScannerSettings={{
        barcodeTypes: ['qr']
      }}
      facing={face}
      >
      <View className='flex-row justify-between  h-full'>
        <TextBtn className='flex-1 self-end items-center' functionality={toggleCameraFacing}>
        Flip Camera
        </TextBtn>
        <TextBtn className='flex-1 self-end items-center' functionality={() => setNotUsingCamera(true)}>
        Exit
        </TextBtn>
      </View>
      </CameraView>
    </View> 
  )


}


export default Index;
