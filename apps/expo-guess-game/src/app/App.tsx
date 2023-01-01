/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useColorScheme } from 'nativewind';
import colors from 'tailwindcss/colors';
import {
  StyledLinearGradient,
  StyledSafeAreaView,
  StyledSwitch,
  StyledText,
  StyledView,
} from '@integrated-mono/expo/shared-ui';

import { GameOverScreen, GameScreen, StartGameScreen } from '../screens';
import { Screen } from '../components/ui';

const App = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [userInput, setUserInput] = useState('');
  const [chosenNumber, setChosenNumber] = useState<number>(0);
  //const [attempts, setAttempts] = useState<number[]>([]);
  // useMemo(() => first, [attempts])
  const [gameOver, setGameOver] = useState<{
    state: boolean;
    result: number;
    attempts: number[];
  }>({
    state: true,
    result: 0,
    attempts: [],
  });

  const checkValidInput = (input: string) => {
    const number = parseInt(input);
    if (input === '' || isNaN(number) || number <= 0) {
      Alert.alert(
        'Invalid Number',
        'Please enter a valid number between 1-99',
        [
          {
            text: 'OK',
            onPress: () => {
              setUserInput('');
            },
            style: 'destructive',
          },
        ]
      );
      return false;
    }

    return true;
  };

  const confirmHandler = () => {
    if (!checkValidInput(userInput)) return;
    setChosenNumber(parseInt(userInput));
    setGameOver((prev) => ({
      ...prev,
      state: false,
    }));
  };

  const resetHandler = () => {
    setUserInput('');
  };

  const restrictInput = (text: string) => {
    setUserInput(text.replace(/[^0-9]/g, ''));
  };

  const updateAttemptsHandler = (guess: number) => {
    setGameOver((prev) => ({
      ...prev,
      attempts: [guess, ...prev.attempts],
    }));
  };

  const endGameHandler = (resultNumber: number) => {
    setGameOver((prev) => ({
      ...prev,
      state: true,
      result: resultNumber,
    }));
  };

  const onInitGameHandler = () => {
    setGameOver({
      state: true,
      result: 0,
      attempts: [],
    });
    setChosenNumber(0);
    setUserInput('');
  };

  let screen: JSX.Element;

  if (gameOver.state) {
    if (chosenNumber <= 0) {
      screen = (
        <StartGameScreen
          userInput={userInput}
          restrictInput={restrictInput}
          resetHandler={resetHandler}
          confirmHandler={confirmHandler}
        />
      );
    } else {
      screen = (
        <GameOverScreen
          resultNumber={gameOver.result}
          attempts={gameOver.attempts}
          onInitGame={onInitGameHandler}
          colorScheme={colorScheme}
        />
      );
    }
  } else {
    if (chosenNumber > 0) {
      screen = (
        <GameScreen
          chosenNumber={chosenNumber}
          colorScheme={colorScheme}
          onEndGame={endGameHandler}
          onUpdateAttempts={updateAttemptsHandler}
          attempts={gameOver.attempts}
          // onPushAttempt={pushAttempt}
        />
      );
    } else {
      //This condition should never happen
      screen = (
        <Screen>
          <StyledText>Loading...</StyledText>
        </Screen>
      );
      console.log('An error occurred');
    }
  }

  return (
    <StyledLinearGradient
      className="flex-1"
      colors={
        colorScheme === 'dark'
          ? [colors.rose[500], colors.yellow[500]]
          : [colors.cyan[500], colors.white]
      }
    >
      <StatusBar
        barStyle={`${
          colorScheme === 'dark' ? 'light-content' : 'dark-content'
        }`}
      />
      <StyledSafeAreaView className="flex-1">
        <StyledView>
          <StyledSwitch
            value={colorScheme === 'dark'}
            onChange={() => {
              toggleColorScheme();
            }}
            className="absolute top-0 right-0 mr-2 mt-2"
            trackColor={{ false: colors.rose[500], true: colors.cyan[500] }}
            ios_backgroundColor={colors.rose[500]}
          />
          <StyledSwitch />
        </StyledView>
        {screen}
        {/* <StyledView>
          <StyledFlatList
            data={gameOver.attempts}
            renderItem={(dataItem) => (
              <Title
                rounded="full"
                paddingVertical="sm"
                size="base"
                backgroundColor={
                  colorScheme === 'light' ? 'secondary' : 'primary'
                }
              >{`#${gameOver.attempts?.length - dataItem.index} attempt > ${
                dataItem.item
              }`}</Title>
            )}
            keyExtractor={(item, index) => `${item}-${index}`}
          />
        </StyledView> */}
      </StyledSafeAreaView>
    </StyledLinearGradient>
    // </StyledView>
  );
};

export default App;
