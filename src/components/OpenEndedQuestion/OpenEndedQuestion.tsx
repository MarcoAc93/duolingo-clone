import { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import mascot from '../../../assets/images/mascot.png';
import { styles } from './styles';
import { ConfirmationButton } from '../ConfirmationButton';

type OpenQuestionType = {
  answer: string;
  id: string;
  text: string;
  type: string;
}

interface OpenEndedQuestionProps {
  question: OpenQuestionType
  onCorrect: () => void;
  onWrong: () => void;
};

export const OpenEndedQuestion = ({ question, onCorrect, onWrong }: OpenEndedQuestionProps) => {
  const [input, setInput] = useState('');

  const inputHandler = (value: string) => {
    setInput(value);
  };
  
  const checkHandler = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
      setInput('');
    } else {
      onWrong();
    }
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image source={mascot} style={styles.mascot} resizeMode='contain' />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        placeholder='Type in english'
        style={styles.textInput}
        value={input}
        onChangeText={inputHandler}
        textAlignVertical='top'
        multiline
      />
      <ConfirmationButton
        text="Check"
        onPress={() => checkHandler()}
        disabled={!input}
      />
    </>
  );
};