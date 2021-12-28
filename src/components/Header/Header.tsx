import { View, StyleSheet, Image, Text } from 'react-native';

import { ProgressBar } from '../ProgressBar';

// @ts-ignore
import heart from '../../../assets/images/heart.png';

export const Header = ({ progress, lives }: { progress: number, lives: number }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />
      <Image source={heart}  style={styles.heart} resizeMode='contain' />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  heart: {
    height: 30,
    width: 30,
    marginHorizontal: 10
  },
  lives: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18
  }
});
