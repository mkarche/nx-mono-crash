import React, { ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { StyledView } from '@integrated-mono/expo/shared-ui';

const cardVariants = cva('m-8 items-center rounded p-4 shadow shadow-black', {
  variants: {
    variant: {
      primary: 'bg-primary-900',
      secondary: 'bg-secondary-900',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
}

export const Card = ({ variant, children }: CardProps) => {
  return (
    <StyledView className={cardVariants({ variant })}>{children}</StyledView>
  );
};

//export default Card
