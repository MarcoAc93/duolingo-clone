import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';

import { MultipleOptionCards } from './src/components/MultipleOptionCards';
import questions from './assets/data/imageMulatipleChoiceQuestions';

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('You won!');
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    Alert.alert('Wrong :(');
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle='dark-content' />
      <MultipleOptionCards
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
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
  
});
