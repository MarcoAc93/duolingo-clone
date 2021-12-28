import { Text, View, Image } from 'react-native';

import { styles } from './styles';

interface OptionCardProps {
  image: string;
  title: string;
};

export const OptionCard = ({ image, title }: OptionCardProps) => (
  <View style={styles.optionContainer}>
    <Image
      source={{ uri: image }}
      style={styles.optionImage}
      resizeMode='contain'
    />
    <Text style={styles.optionText}>{title}</Text>
  </View>
);
