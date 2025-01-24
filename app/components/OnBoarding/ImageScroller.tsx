import React from 'react';
import { View, Image } from 'react-native';
import TextFont from '../UI/TextFont';

import { ImageSourcePropType } from 'react-native';

const ImageScroller = ({icon, name, description} : {icon: ImageSourcePropType , name: string , description: string} ) => {
  return (
    <View className="items-center justify-center">
    <Image 
      source={icon}
      className="w-screen"
      resizeMode="center"
    />
    <TextFont className="text-center text-white text-3xl">
      {name}
    </TextFont>
    <TextFont className="text-center text-white text-lg">
      {description}
    </TextFont>
  </View>
  );
}

export default ImageScroller;
