import { useState } from 'react';
import { View, Text, Image, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

// @ts-ignore
import mascot from '../../../assets/images/mascot.png';
import { styles } from './styles';
import { ConfirmationButton } from '../ConfirmationButton';
import { OptionType } from '../MultipleOptionCards';

type OpenQuestionType = {
  id: string;
  type: string;
  text?: string;
  answer?: string;
  options?: OptionType[];
  question?: string;
};

interface OpenEndedQuestionProps {
  question: OpenQuestionType
  onCorrect: () => void;
  onWrong: () => void;
};

Keyboard.dismiss();

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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ width: '100%', height: '100%'}}>
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
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};