/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StatusBar } from 'react-native';
import { useColorScheme } from 'nativewind';
import colors from 'tailwindcss/colors';
// import {
//   StyledLinearGradient,
//   StyledSafeAreaView,
//   StyledSwitch,
//   StyledView,
// } from '@integrated-mono/expo/shared-ui';
import {} from '@integrated-mono/expo/shared-ui';
import Title from '../components/ui/Title';

// const StyledSafeAreaView = styled(SafeAreaView);
// const StyledView = styled(View);
// const StyledSwitch = styled(Switch);
// const StyledText = styled(Text);
// const StyledLinearGradient = styled(LinearGradient);

const App = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  // console.log(colorScheme);

  return (
    // <StyledView
    //   // className={`${
    //   //   colorScheme === 'dark' ? 'bg-primary-500' : 'bg-secondary-500'
    //   // } flex-1`}
    //   className="flex-1"
    // >
    <StyledLinearGradient
      className="flex-1"
      colors={
        colorScheme === 'dark'
          ? [colors.rose[500], colors.yellow[500]]
          : [colors.cyan[500], colors.white]
      }
    >
      <StatusBar barStyle="dark-content" />
      <StyledSafeAreaView>
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
        </StyledView>
        <StyledView className="border-1 pt-100">
          <Title>Guess My Number</Title>
        </StyledView>
      </StyledSafeAreaView>
    </StyledLinearGradient>
    // </StyledView>
  );
};

export default App;
