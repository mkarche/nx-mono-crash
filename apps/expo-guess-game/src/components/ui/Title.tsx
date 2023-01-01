import { TextProps } from 'react-native';
import React, { ReactNode } from 'react';
import { StyledProps } from 'nativewind';
import { StyledText, StyledView } from '@integrated-mono/expo/shared-ui';
import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';

const textClass = cva(['font-bold inline'], {
  variants: {
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
    textColor: {
      white: 'text-white',
      black: 'text-black',
      primary: 'text-primary-600',
      secondary: 'text-secondary-400',
    },
  },
  defaultVariants: {
    size: '2xl',
    textColor: 'white',
  },
});

const wrapperClass = cva(
  'mx-auto max-w-fit items-center justify-center border-2',
  {
    variants: {
      borderColor: {
        white: 'border-white',
        black: 'border-black',
        primary: 'border-primary-600',
        secondary: 'border-secondary-400',
      },
      backgroundColor: {
        white: 'bg-white',
        black: 'bg-black',
        primary: 'bg-primary-600',
        secondary: 'bg-secondary-400',
      },
      paddingHorizontal: {
        sm: 'px-4',
        base: 'px-8',
        md: 'px-12',
        lg: 'px-16',
        xl: 'px-20',
      },
      paddingVertical: {
        sm: 'py-2',
        base: 'py-4',
        md: 'py-6',
        lg: 'py-8',
        xl: 'py-10',
      },
      marginVertical: {
        sm: 'my-1',
        base: 'my-2',
        md: 'my-4',
        lg: 'my-6',
        xl: 'my-8',
      },
      rounded: {
        none: 'rounded-none',
        base: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      borderColor: 'white',
      paddingHorizontal: 'base',
      paddingVertical: 'base',
      marginVertical: 'base',
      rounded: 'none',
    },
  }
);

interface TitleProps
  extends StyledProps<TextProps>,
    VariantProps<typeof textClass>,
    VariantProps<typeof wrapperClass> {
  children: ReactNode;
  // wrapperClassName?: string;
}

export const Title = ({
  children,
  className,
  // wrapperClassName,
  size,
  textColor,
  borderColor,
  backgroundColor,
  paddingHorizontal,
  paddingVertical,
  rounded,
  marginVertical,
}: TitleProps) => {
  //const Dimensions = useWindowDimensions();

  return (
    <StyledView
      className={clsx(
        wrapperClass({
          borderColor,
          backgroundColor,
          paddingHorizontal,
          paddingVertical,
          rounded,
          marginVertical,
        })
      )}
    >
      <StyledText className={clsx([className, textClass({ size, textColor })])}>
        {children}
      </StyledText>
    </StyledView>
  );
};

//export default Title;
