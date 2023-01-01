import React, { ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { StyledText } from '@integrated-mono/expo/shared-ui';
import { StyledProps } from 'nativewind';
import { TextProps } from 'react-native';
import { clsx } from 'clsx';

const headingVariants = cva('font-bold', {
  variants: {
    variant: {
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      white: 'text-white',
      black: 'text-black',
    },
    size: {
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
  defaultVariants: {
    variant: 'secondary',
    size: '2xl',
  },
});

interface HeadingProps
  extends VariantProps<typeof headingVariants>,
    StyledProps<TextProps> {
  children: ReactNode;
}

export const Heading = ({
  children,
  variant,
  size,
  className,
}: HeadingProps) => {
  return (
    <StyledText className={clsx(className, headingVariants({ variant, size }))}>
      {children}
    </StyledText>
  );
};

//export default Heading
