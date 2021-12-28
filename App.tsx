import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { OptionCard } from './src/components/OptionCard';
import question from './assets/data/oneQuestionWithOption';

export type OptionType = {
  id: string;
  image: string;
  text: string;
};

export default function App() {
  const [selected, setSelected] = useState<OptionType>();

  const selectedHandler = (option: OptionType) => {
    setSelected(option);
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle='dark-content' />
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {question.options.map(option => (
          <OptionCard
            {...option}
            key={option.id}
            isSelected={selected?.id === option.id}
            selectedHandler={() => selectedHandler(option)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 45,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'stretch'
  },
  optionsContainer: {
    flex: 1,
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },
});
