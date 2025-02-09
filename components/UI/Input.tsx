import { TextInput , TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: TextInputProps['keyboardType'];
  editable?: boolean;
  extraClassName?: string
}


const Input = ({
  value,
  onChangeText,
  placeholder = '',
  keyboardType = 'default',
  editable = true,
  extraClassName,
  ...rest
} : InputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={'white'}
      keyboardType={keyboardType}
      editable={editable}
      className={`h-16 border border-secondary bg-accent p-4 rounded-lg text-secondary text-xl ${extraClassName}`}
      {...rest}
    />
  );
};

export default Input;
