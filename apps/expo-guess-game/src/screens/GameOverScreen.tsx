import React from 'react';
import { Card, Heading, MyButton, Screen, Title } from '../components/ui';
import { StyledText } from '@integrated-mono/expo/shared-ui';
import { ColorSchemeName } from 'react-native';

interface GameOverProps {
  resultNumber: number;
  attempts: number[];
  onInitGame: () => void;
  colorScheme: ColorSchemeName;
}

export const GameOverScreen = ({
  resultNumber,
  attempts,
  onInitGame,
  colorScheme,
}: GameOverProps) => {
  return (
    <Screen className="mt-5">
      <Title>Game Over</Title>
      <Card>
        <Heading size="xl">Résultat</Heading>
        <Title marginVertical="lg" rounded="base" textColor="secondary">
          {resultNumber}
        </Title>
        <MyButton onPress={onInitGame}>Re-jouer</MyButton>
      </Card>
      <Heading
        size="xl"
        variant={colorScheme === 'light' ? 'black' : 'white'}
        className="p-5 text-center"
      >
        L'ordinateur a trouvé la réponse après{' '}
        <StyledText
          className={
            colorScheme === 'light' ? 'text-secondary-500' : 'text-primary-500'
          }
        >
          {attempts.length}
        </StyledText>{' '}
        tentatives
      </Heading>
    </Screen>
  );
};
