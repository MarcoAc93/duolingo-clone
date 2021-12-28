import { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Alert } from 'react-native';

import { Header } from './src/components/Header';
import { MultipleOptionCards } from './src/components/MultipleOptionCards';
import { OpenEndedQuestion } from './src/components/OpenEndedQuestion';

import questions from './assets/data/allQuestions';

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [lives, setLives] = useState(5);
  
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

  const restartGame = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  }

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert('Game over :(', 'Try again', [{
        text: 'Try again',
        onPress: restartGame
      }]);
      setLives(lives - 1)
    } else {
      Alert.alert('Wrong :(');
      setLives(lives - 1)
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle='dark-content' />
      <Header progress={currentQuestionIndex / questions.length } lives={lives} />
      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' ? (
        <MultipleOptionCards
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 55,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
