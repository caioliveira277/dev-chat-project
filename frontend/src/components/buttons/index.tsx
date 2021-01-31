import React from 'react';
import { ButtonDefault, IButtonTheme } from './styles';

export const ButtonTheme: React.FC<IButtonTheme> = ({
  children,
  backgroundCustomColor,
  backgroundTheme,
  textColorTheme,
  textCustomColor,
  buttonType
}) => {
  return (
    <ButtonDefault
      buttonType={buttonType}
      backgroundCustomColor={backgroundCustomColor}
      backgroundTheme={backgroundTheme}
      textColorTheme={textColorTheme}
      textCustomColor={textCustomColor}
    >
      {children}
    </ButtonDefault>
  );
}