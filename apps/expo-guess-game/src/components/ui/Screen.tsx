import { StyledView } from '@integrated-mono/expo/shared-ui';
import { StyledProps } from 'nativewind';
import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import { clsx } from 'clsx';

interface ScreenProps extends StyledProps<ViewProps> {
  children: ReactNode;
}

export const Screen = ({ children, className, ...props }: ScreenProps) => {
  return (
    <StyledView className={clsx('flex-1', className)} {...props}>
      {children}
    </StyledView>
  );
};
