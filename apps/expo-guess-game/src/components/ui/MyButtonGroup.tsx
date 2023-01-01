import React, { ReactNode } from 'react';
import { StyledView } from '@integrated-mono/expo/shared-ui';
import { StyledProps } from 'nativewind';
import { ViewProps } from 'react-native';
import { clsx } from 'clsx';

interface MyButtonGroupProps extends StyledProps<ViewProps> {
  children: ReactNode;
}

export const MyButtonGroup = ({
  children,
  className,
  ...props
}: MyButtonGroupProps) => {
  return (
    <StyledView
      className={clsx('w-full flex-row justify-around', className)}
      {...props}
    >
      {children}
    </StyledView>
  );
};
