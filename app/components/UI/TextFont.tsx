import React from 'react';
import { TextProps, Text } from 'react-native';

const TextFont = ({ children , className } : TextProps) => {
  return (
    <Text className={`${className} font-bold`}>
      {children}
    </Text>
  );
}

export default TextFont;
