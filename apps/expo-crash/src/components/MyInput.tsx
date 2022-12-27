import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { StyledProps, styled } from 'nativewind';

const StyledView = styled(View);

// interface MyInputProps extends StyledProps<TextInputProps> {}

const MyInput = ({
  placeholder = 'enter your text here',
  className,
  ...props
}: StyledProps<TextInputProps>) => {
  return (
    <StyledView className={` ${className}`}>
      <TextInput
        placeholder={placeholder}
        style={styles.inputStyle}
        {...props}
        // value={inputVal}
        // onChangeText={(e) => setInputVal(e)}
        // placeholder="enter a goal"
      />
    </StyledView>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  inputStyle: {
    padding: 12,
    // minHeight: 16,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    color: 'white',
    //fontWeight: '900',
    //flex: 1,
    //width: 60,
  },
});
