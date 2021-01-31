import styled from 'styled-components';
import * as utils from 'components/utils';
import { darken } from 'polished';

export interface IButtonTheme 
  extends utils.IdynamicBackgroundColor, utils.IdynamicTextColor {
    buttonType: string;
    outlined?: boolean;
    onClick?: () => void;
}
export const ButtonDefault = styled.button<IButtonTheme>`
  border: 1px solid ${(props) => utils.dynamicBackgroundColor(props)};
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
  background-color: ${(props) => 
    props.outlined ? 
      props.backgroundCustomColor : 
      utils.dynamicBackgroundColor(props)};
  &:hover {
    color: ${(props) => props.outlined ? props.backgroundCustomColor : utils.dynamicTextColor(props)};
    background-color: ${(props) => 
      props.outlined ? 
        utils.dynamicBackgroundColor(props) :
        darken(0.05, utils.dynamicBackgroundColor(props))};
  }
`;