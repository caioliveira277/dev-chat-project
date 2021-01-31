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