import {
  View,
  Text,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
interface GoalItemProps extends PressableProps {
  title: string;
  className?: string;
}

const GoalItem = ({ title, className, ...props }: GoalItemProps) => {
  return (
    <StyledView
      // style={styles.viewStyles}
      className={`border-1 m-1 rounded bg-teal-500 ${className}`}
    >
      <Pressable
        android_ripple={{ color: '#0d9488' }}
        style={({ pressed }) => {
          return pressed ? styles.pressableStyles : {};
        }}
        {...props}
      >
        <StyledText className="p-2 font-bold text-white">{title}</StyledText>
      </Pressable>
    </StyledView>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  viewStyles: {
    backgroundColor: '#0d9488',
  },
  pressableStyles: {
    backgroundColor: '#0d9488',
  },
});
