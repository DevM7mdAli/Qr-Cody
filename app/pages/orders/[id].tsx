import TextFont from '@/components/UI/TextFont';
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
      headerBackTitle: 'Orders',
    });
  }, [navigation, id]);

  return (


        <View className='flex-1 justify-center items-center bg-primary'>
          <QRCode 
          value={'https://' + id}
          size={250}
          />

          <TextFont fontType='Bold'>The id: {id}</TextFont>
          <TextFont>Order status: complete</TextFont>
          <TextFont>time of: 1/1/1998</TextFont>
        </View>
      

  );
}

const styles = StyleSheet.create({})

export default Orders;
