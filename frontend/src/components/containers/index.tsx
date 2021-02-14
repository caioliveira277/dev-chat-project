import React from 'react';
import { MainContainer, IMainContainerProps } from './styles';

export const Main: React.FC<IMainContainerProps> = ({ 
  children,
  backgroundTheme,
  backgroundCustomColor,
  centralized
}) => {
  return (
    <MainContainer 
      backgroundTheme={backgroundTheme} 
      backgroundCustomColor={backgroundCustomColor}
      centralized={centralized}
    >
      {children}
    </MainContainer>
  );
}