import { View, StyleSheet } from 'react-native'

export const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${progress * 100}%`} ]}>
        <View style={styles.highlight}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    height: 20,
    backgroundColor: 'lightgray',
    borderRadius: 15
  },
  fg: {
    flex: 1,
    backgroundColor: '#FAC800',
    borderRadius: 15,
  },
  highlight: {
    backgroundColor: '#FAD131',
    width: '90%',
    height: 5,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'center'
  }
});
