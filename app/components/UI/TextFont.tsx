import cn from '@/app/lib/utils';
import { TextProps, Text } from 'react-native';

const TextRegular = ({ children , className } : TextProps) => {
  return (
    <Text className={cn(`font-kanit_Regular text-white`, className )}>
      {children}
    </Text>
  );
}

const TextBold = ({ children , className } : TextProps) => {
  return (
    <Text className={cn('font-kanit_Bold text-white', className)}>
      {children}
    </Text>
  );
}

export { TextBold , TextRegular };