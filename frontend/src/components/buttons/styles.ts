import styled from 'styled-components';
import * as utils from 'components/utils';
import { darken } from 'polished';

export interface IButtonTheme 
  extends utils.IdynamicBackgroundColor, utils.IdynamicTextColor {
    buttonType: string;
}
export const ButtonDefault = styled.button<IButtonTheme>`
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: ${utils.dynamicTextColor};
  padding: 5px 20px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 5px rgba(41, 44, 43, 0.1);
  background-color: ${utils.dynamicBackgroundColor};
  &:hover {
    background-color: ${(props) => darken(0.05, utils.dynamicBackgroundColor(props))}
  }
`;