/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { styled } from 'nativewind';
import GoalList from '../components/GoalList';
import GoalInput from '../components/GoalInput';
import MyButton from '../components/MyButton';

const StyledView = styled(View);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledImage = styled(Image);

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <StyledView className="bg-indigo-500" style={styles.container}>
      <StatusBar barStyle="default" />
      <StyledSafeAreaView style={styles.mainContainer}>
        <StyledView>
          <MyButton
            title="NEW GOAL"
            buttonClassName="bg-teal-500 my-4"
            onPress={() => setIsVisible(true)}
          />
        </StyledView>
        <Modal visible={isVisible}>
          <StyledView className="flex-1 items-center justify-center bg-indigo-500 p-2">
            <StyledImage
              className="mb-2 h-32 w-32"
              source={require('../../assets/images/goal.png')}
            />
            <GoalInput
              onCancel={() => {
                setIsVisible(false);
              }}
            />
          </StyledView>
        </Modal>
        <StyledView className="w-full flex-1">
          <GoalList />
        </StyledView>
      </StyledSafeAreaView>
    </StyledView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // borderWidth: 2,
  },
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    padding: 16,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  hello: {
    color: 'black',
  },
});
