import { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import { OptionCard } from '../OptionCard';
import { ConfirmationButton } from '../ConfirmationButton';

import { styles } from './styles';

export type OptionType = {
  id: string;
  image: string;
  text: string;
  correct?: boolean;
};

interface MultipleOptionCardsProps {
  question: {
    question: string;
    options: OptionType[];
  };
  onCorrect: () => void;
  onWrong: () => void;
};

export const MultipleOptionCards = ({ question, onCorrect, onWrong }: MultipleOptionCardsProps) => {
  const [selected, setSelected] = useState<OptionType>();

  const selectedHandler = (option: OptionType) => {
    setSelected(option);
  };

  const checkHandler = () => {
    if (selected.correct) {
      onCorrect();
      setSelected(null);
    } else {
      onWrong();
    }
  };

  return (
    <>
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
      <ConfirmationButton
        text="Check"
        onPress={() => checkHandler()}
        disabled={!selected}
      />
    </>
  );
};