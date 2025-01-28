import { TextProps, Text } from 'react-native';

const TextRegular = ({ children , className } : TextProps) => {
  return (
    <Text className={`${className} font-kanit_Regular text-white`}>
      {children}
    </Text>
  );
}

const TextBold = ({ children , className } : TextProps) => {
  return (
    <Text className={`${className} font-kanit_Bold text-white`}>
      {children}
    </Text>
  );
}

export {TextBold , TextRegular};