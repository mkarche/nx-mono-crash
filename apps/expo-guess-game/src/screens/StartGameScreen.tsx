/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StyledTextInput, StyledView } from '@integrated-mono/expo/shared-ui';

import {
  Card,
  Heading,
  MyButton,
  MyButtonGroup,
  Title,
} from '../components/ui/';

interface StartGameProps {
  userInput: string;
  restrictInput?: (text: string) => void;
  resetHandler?: () => void;
  confirmHandler?: () => void;
}

export const StartGameScreen = ({
  userInput,
  restrictInput,
  resetHandler,
  confirmHandler,
}: StartGameProps) => {
  return (
    <StyledView className="flex-1 pt-20">
      <Title>Guess My Number</Title>
      <Card>
        <Heading>Enter a Number</Heading>
        <StyledTextInput
          className="border-secondary-500 my-4 w-16 border-b-2 text-center text-4xl text-white"
          value={userInput}
          onChangeText={restrictInput}
          maxLength={2}
          keyboardType="numeric"
        />
        <MyButtonGroup>
          <MyButton onPress={resetHandler}>Reset</MyButton>
          <MyButton onPress={confirmHandler}>Confirm</MyButton>
        </MyButtonGroup>
      </Card>
    </StyledView>
  );
};

// export default StartGameScreen;
