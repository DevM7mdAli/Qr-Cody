import { TextBold, TextRegular } from '@/app/components/UI/TextFont';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Orders = () => {
  const { id } = useLocalSearchParams<{id : string}>()

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: `Order ID: ${id}`,
    });
  }, [navigation]);

  return (


        <View className='flex-1 justify-center items-center bg-primary'>
          <QRCode 
          value={'https://' + id}
          size={250}
          />

          <TextBold>The id: {id}</TextBold>
          <TextRegular>Order status: complete</TextRegular>
          <TextRegular>time of: 1/1/1998</TextRegular>
        </View>
      

  );
}

const styles = StyleSheet.create({})

export default Orders;
