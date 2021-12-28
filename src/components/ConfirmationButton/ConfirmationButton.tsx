import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';

interface ConfirmationButtonProps {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const ConfirmationButton = ({ text, onPress, disabled }: ConfirmationButtonProps) => {
  return (
    <Pressable style={[styles.container, disabled ? styles.disable : {}]} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};