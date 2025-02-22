import Btn from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import RootSafeView from '@/components/UI/RootSafeView';
import TextFont from '@/components/UI/TextFont';
import { CAMERA } from '@/constants/images';
import { auth } from '@/firebaseConfig';
import { signInSchema } from '@/lib/zod/signIn';
import { router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { z } from 'zod';

type SignInFields = z.infer<typeof signInSchema>

const signInDefaultValues : SignInFields = { email: '', password: '' }

const Index = () => {
  const [userCredential, setUserCredential] = useState(signInDefaultValues)
  const [signInErrors, setSignInErrors] = useState<Partial<SignInFields>>({})

  const validateSignIn = (data: SignInFields) => {
    try {
      signInSchema.parse(data);
      setSignInErrors({});

      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          newErrors[error.path[0]] = error.message;
        });
        setSignInErrors(newErrors);
      }
      return false;
    }
  };


  async function handleSignIn(){
    if(validateSignIn(userCredential)){
      try {
        await signInWithEmailAndPassword(auth , userCredential.email, userCredential.password);
        router.replace('/(tabs)');
      } catch (error) {
        console.error('Sign-in failed', error);
      }
    }
  }



  return (
    <RootSafeView className='h-full justify-center'>
      {/* parent of the the center */}
        <KeyboardAvoidingView behavior='padding' className='min-h-[85vh] justify-center px-8 my-6 w-full gap-y-4'>
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
            value={userCredential.email}
            placeholder='Email'
            onChangeText={(email) => setUserCredential({ ...userCredential, email })}
            hasError={signInErrors.email}
            textContentType='emailAddress'
            keyboardType='email-address'
            />
            <Input 
            value={userCredential.password}
            placeholder='Password'
            onChangeText={(password) => setUserCredential({ ...userCredential, password })}
            hasError={signInErrors.password}
            textContentType='password'
            secureTextEntry
            />
          </View>
          <Btn
            className='items-center'
            functionality={handleSignIn}
            >
            Sign In
          </Btn>
        </KeyboardAvoidingView>
    </RootSafeView>
  );
}

export default Index;
