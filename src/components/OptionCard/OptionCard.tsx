import { Text, Image, Pressable } from 'react-native';

import { styles } from './styles';

interface OptionCardProps {
  image: string;
  text: string;
  id: string;
  isSelected?: boolean;
  selectedHandler?: () => void;
};

export const OptionCard = ({ id, image, text, isSelected = false, selectedHandler }: OptionCardProps) => (
  <Pressable
    style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}
    onPress={selectedHandler}
  >
    <Image
      source={{ uri: image }}
      style={styles.optionImage}
      resizeMode='contain'
    />
    <Text style={isSelected ? styles.selectedText : styles.optionText}>{text}</Text>
  </Pressable>
);
