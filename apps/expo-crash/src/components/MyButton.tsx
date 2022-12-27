import React from 'react';
import { StyledProps, styled } from 'nativewind';
import { View, Text, Pressable, PressableProps, ViewProps } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);

/* eslint-disable-next-line */
export interface MyButtonProps extends StyledProps<PressableProps> {
  textColor?: 'white' | 'black';
  textSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  title: string;
  buttonClassName?: StyledProps<ViewProps>['className'];
}

function MyButton({
  textColor = 'white',
  textSize = 'base',
  title,
  buttonClassName = 'bg-indigo-500',
  ...props
}: MyButtonProps) {
  return (
    <StyledView
      className={`w-fit items-center justify-center rounded ${buttonClassName}`}
    >
      <Pressable {...props}>
        <StyledText
          className={`py-2 px-8 text-${textSize} font-bold text-${textColor}`}
        >
          {title}
        </StyledText>
      </Pressable>
    </StyledView>
  );
}

export default MyButton;

// const styles = StyleSheet.create({
//   buttonStyles: {
//     color: '#fff',
//   },
// });
