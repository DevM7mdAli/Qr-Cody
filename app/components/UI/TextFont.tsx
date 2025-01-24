import React from 'react';
import { TextProps, Text } from 'react-native';

const TextFont = ({ children , className } : TextProps) => {
  return (
    <Text className={`${className} font-bold text-white`}>
      {children}
    </Text>
  );
}

export default TextFont;
