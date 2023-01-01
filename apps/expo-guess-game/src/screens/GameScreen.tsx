import { StyledFlatList, StyledView } from '@integrated-mono/expo/shared-ui';
import React, { useState } from 'react';
import {
  Card,
  Heading,
  MyButton,
  MyButtonGroup,
  Screen,
  Title,
} from '../components/ui';
import { Alert, ColorSchemeName } from 'react-native';

interface GameProps {
  chosenNumber: number;
  colorScheme: ColorSchemeName;
  onEndGame: (result: number) => void;
  onUpdateAttempts: (guess: number) => void;
  attempts: number[];
}

type DirectionType = 'lower' | 'greater';

let minBoundary = 1;
let maxBoundary = 99;

export const GameScreen = ({
  chosenNumber,
  colorScheme,
  onEndGame,
  onUpdateAttempts,
  attempts,
}: GameProps) => {
  // let minBoundary = useMemo(() => 1, []); //alternate solution if you want to declare minBoundary within GameScreen component
  // let maxBoundary = useMemo(() => 99, []);//alternate solution if you want to declare maxBoundary within GameScreen component
  const initialGuess = generateGuess(1, 99, chosenNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction: DirectionType) => {
    if (direction === 'lower') {
      if (chosenNumber > currentGuess) {
        Alert.alert('Mensonge', 'Tu sais que tu mens, dis la vérité', [
          { style: 'cancel' },
        ]);
        return;
      }
      maxBoundary = currentGuess;
    } else {
      if (chosenNumber < currentGuess) {
        Alert.alert(
          'Tell the truth',
          'You know it is a lie, please tell the truth',
          [{ style: 'cancel' }]
        );
        return;
      }
      minBoundary = currentGuess;
    }

    const rdNumber = generateGuess(minBoundary, maxBoundary, currentGuess);
    onUpdateAttempts(rdNumber);

    if (rdNumber === chosenNumber) {
      // reinitialize all the parameters
      minBoundary = 1;
      maxBoundary = 99;
      onEndGame(rdNumber);

      return;
    }

    setCurrentGuess(rdNumber);
  };

  return (
    <Screen className="pt-5">
      <Title>opponent's Guess</Title>
      <Title
        borderColor={colorScheme === 'light' ? 'primary' : 'secondary'}
        textColor={colorScheme === 'light' ? 'primary' : 'secondary'}
        paddingHorizontal="lg"
        rounded="base"
      >
        {currentGuess}
      </Title>
      <Card>
        <Heading>Higher or Lower</Heading>
        <MyButtonGroup className="mt-4">
          <MyButton onPress={nextGuessHandler.bind(this, 'lower')}>-</MyButton>
          <MyButton onPress={nextGuessHandler.bind(this, 'greater')}>
            +
          </MyButton>
        </MyButtonGroup>
      </Card>
      <StyledView>
        <StyledFlatList
          data={attempts}
          renderItem={(dataItem) => (
            <Title
              rounded="full"
              paddingVertical="sm"
              size="base"
              backgroundColor={
                colorScheme === 'light' ? 'secondary' : 'primary'
              }
            >{`#${attempts?.length - dataItem.index} attempt > ${
              dataItem.item
            }`}</Title>
          )}
          keyExtractor={(item, index) => `${item}-${index}`}
        />
      </StyledView>
    </Screen>
  );
};

//export default GameScreen

const generateGuess = (min: number, max: number, exclude: number) => {
  let guess = Math.floor(Math.random() * (max - min + 1) + min);
  if (guess === exclude) {
    guess = generateGuess(min, max, exclude);
  }
  return guess;
};
