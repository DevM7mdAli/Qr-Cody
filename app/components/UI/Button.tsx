import React, { ReactNode } from 'react';
import { Pressable, PressableProps } from 'react-native';
import {TextRegular} from './TextFont';

interface CustomPressableProps extends PressableProps {
  className?: string;
  children?: ReactNode;
  functionality: () => void;
}

const Btn = ({ children , className , functionality } : CustomPressableProps) => {
  return (
    <Pressable 
    className={`${className} bg-accent p-5 rounded-2xl`}
    onPress={functionality}
    hitSlop={10}
    >
      <TextRegular className='text-secondary text-xl'>
        {children}
      </TextRegular>
    </Pressable>
  );
}

export const TextBtn = ({ children , className , functionality } : CustomPressableProps) => (
          <Pressable 
          hitSlop={10}
          className={`${className} p-5`}
          onPress={functionality}
          >
            <TextRegular className='text-secondary text-xl'>
              {children}
            </TextRegular>
          </Pressable>
  
)

export default Btn;