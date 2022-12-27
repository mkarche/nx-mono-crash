import { View } from 'react-native';
import React, { useState } from 'react';
import { styled } from 'nativewind';
import MyInput from './MyInput';
import MyButton from './MyButton';
import { addGoal } from '../utils/stores';

const StyledView = styled(View);
interface GoalInputProps {
  onCancel: () => void;
}

const GoalInput = ({ onCancel }: GoalInputProps) => {
  const [inputVal, setInputVal] = useState('');
  return (
    <StyledView className="mb-4 w-full">
      <StyledView className="mb-2">
        <MyInput value={inputVal} onChangeText={(text) => setInputVal(text)} />
      </StyledView>
      <StyledView className="flex-row justify-center">
        <MyButton
          title="CANCEL"
          buttonClassName="mr-4 bg-red-400"
          onPress={() => {
            onCancel();
          }}
        />
        <MyButton
          title="ADD GOAL"
          buttonClassName="bg-teal-500"
          onPress={() => {
            inputVal && inputVal !== '' && addGoal({ title: inputVal });
            setInputVal('');
            onCancel();
          }}
        />
      </StyledView>
    </StyledView>
  );
};

export default GoalInput;

//const styles = StyleSheet.create({});
