import { KeyboardAvoidingView, Platform, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Input from '../../components/UI/Input';
import { useState } from 'react';
import { TextBold } from '../../components/UI/TextFont';
import { SafeAreaView } from 'react-native-safe-area-context';

const MakeQr = () => {
  const [urlValue , setUrlValue] = useState('')

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    className='bg-primary flex-1'
    >
      <SafeAreaView>
        <TextBold className='text-center text-3xl'>
          Make a QrCode
        </TextBold>
      </SafeAreaView>

        <View className='flex-1 justify-center items-center'>
          <QRCode 
          value={'https://' + urlValue}
          size={250}
          />
        </View>

        <View className='pb-4 px-4'>
          <Input 
          value={urlValue}
          onChangeText={(e) => {setUrlValue(e)}}
          placeholder="You don't need to put https://"
          placeholderTextColor={'white'}
          />
        </View>
        </KeyboardAvoidingView>
  );
}

export default MakeQr;
