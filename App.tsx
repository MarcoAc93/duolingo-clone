import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';

import { OptionCard } from './src/components/OptionCard';
import { ConfirmationButton } from './src/components/ConfirmationButton';
import questions from './assets/data/imageMulatipleChoiceQuestions';

export type OptionType = {
  id: string;
  image: string;
  text: string;
  correct?: boolean;
};

export default function App() {
  const [selected, setSelected] = useState<OptionType>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const selectedHandler = (option: OptionType) => {
    setSelected(option);
  };

  const checkHandler = () => {
    if (selected.correct) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelected(null);
    } else {
      Alert.alert('Wrong!');
    }
  };
  
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('You won!');
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle='dark-content' />
      <Text style={styles.title}>{currentQuestion.question}</Text>

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map(option => (
          <OptionCard
            {...option}
            key={option.id}
            isSelected={selected?.id === option.id}
            selectedHandler={() => selectedHandler(option)}
          />
        ))}
      </View>

      <ConfirmationButton
        text="Check"
        onPress={() => checkHandler()}
        disabled={!selected}
      />
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
