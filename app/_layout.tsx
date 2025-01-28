import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from "expo-router";
import "../global.css";
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded , error] = useFonts({
    'Kanit-Bold': require('../assets/fonts/Kanit/Kanit-Bold.ttf'),
    'Kanit-Regular': require('../assets/fonts/Kanit/Kanit-Regular.ttf')
  });

  useEffect( () => {
    SplashScreen.hideAsync();
  }, [loaded, error])

  if (!loaded && !error) {
    return null;
  }



  return (
      <Stack>
        <Stack.Screen 
        name="index"
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen 
        name="(tabs)"
        options={{
          animation :'fade' ,
          headerShown: false
        }}
        />
      </Stack>

  )
}
