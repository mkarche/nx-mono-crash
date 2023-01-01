import {
  StyledPressable,
  StyledText,
  StyledView,
} from '@integrated-mono/expo/shared-ui';
import clsx from 'clsx';
import { StyledProps } from 'nativewind';

import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import { VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'min-w-[100] overflow-hidden justify-center items-center',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600',
        secondary: 'bg-secondary-600',
      },
      size: {
        sm: 'rounded-2xl',
        md: 'rounded-3xl',
        lg: 'rounded-[32px]',
        xl: 'rounded-[40px]',
        '2xl': 'rounded-[48px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const textVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-white',
      secondary: 'text-black',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

interface MyButtonProps
  extends StyledProps<ViewProps>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  onPress?: () => void;
}

export const MyButton = ({
  children,
  onPress,
  className,
  variant,
}: MyButtonProps) => {
  return (
    <StyledView className={clsx(buttonVariants({ variant }), className)}>
      <StyledPressable
        className={clsx(
          'w-full items-center justify-center py-2 px-8',
          (!variant || variant === 'primary') && 'active:bg-primary-500',
          variant === 'secondary' && 'active:secondary-500'
        )}
        onPress={onPress}
      >
        <StyledText className={textVariants({ variant })}>
          {children}
        </StyledText>
      </StyledPressable>
    </StyledView>
  );
};

//export default MyButton
