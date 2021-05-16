import { StyledProps } from 'styled-components';
import { validColors } from 'theme';

export interface IdynamicBackgroundColor {
  backgroundTheme?: validColors;
  backgroundCustomColor?: string;
}
export const dynamicBackgroundColor = ({
  theme, 
  backgroundTheme, 
  backgroundCustomColor = ''
}: StyledProps<IdynamicBackgroundColor>): string => {
  return backgroundTheme ? theme.colors[backgroundTheme] : backgroundCustomColor
}

export interface IdynamicTextColor {
  textColorTheme?: validColors;
  textCustomColor?: string;
}
export const dynamicTextColor = ({
  theme, 
  textColorTheme, 
  textCustomColor = ''
}: StyledProps<IdynamicTextColor>): string => {
  return textColorTheme ? theme.colors[textColorTheme] : textCustomColor
}

export const datetimeToPtBr = (datetimeString: string): string => {
  const date = new Date(datetimeString);

  return new Intl.DateTimeFormat('pt-br', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false
  }).format(date);
};