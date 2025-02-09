import React from 'react';
import { View, Image } from 'react-native';
import {TextRegular} from '../UI/TextFont';

import { ImageSourcePropType } from 'react-native';

const ImageScroller = ({icon, name, description} : {icon: ImageSourcePropType , name: string , description: string} ) => {
  return (
    <View className="items-center justify-center">
    <Image 
      source={icon}
      className="w-screen"
      resizeMode="center"
    />
    <TextRegular className="text-center text-white text-3xl">
      {name}
    </TextRegular>
    <TextRegular className="text-center text-white text-lg">
      {description}
    </TextRegular>
  </View>
  );
}

export default ImageScroller;
