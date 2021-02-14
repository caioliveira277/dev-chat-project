import React from 'react';
import { 
  ButtonDefault, 
  IButtonTheme,
  ButtomDefaultRounded,
  IButtonThemeRoundedProps
} from './styles';

export const ButtonTheme: React.FC<IButtonTheme> = ({
  children,
  backgroundCustomColor,
  backgroundTheme,
  textColorTheme,
  textCustomColor,
  type,
  outlined = false,
  onClick
}) => {
  return (
    <ButtonDefault
      type={type}
      backgroundCustomColor={backgroundCustomColor}
      backgroundTheme={backgroundTheme}
      textColorTheme={textColorTheme}
      textCustomColor={textCustomColor}
      outlined={outlined}
      onClick={onClick}
    >
      {children}
    </ButtonDefault>
  );
}

export const ButtonThemeRounded: React.FC<IButtonTheme & IButtonThemeRoundedProps> = ({
  children,
  backgroundCustomColor,
  backgroundTheme,
  textColorTheme,
  textCustomColor,
  type,
  outlined = false,
  onClick,
  size
}) => {
  return (
    <ButtomDefaultRounded
      type={type}
      backgroundCustomColor={backgroundCustomColor}
      backgroundTheme={backgroundTheme}
      textColorTheme={textColorTheme}
      textCustomColor={textCustomColor}
      outlined={outlined}
      onClick={onClick}
      size={size}
    >
      {children}
    </ButtomDefaultRounded>
  );
}