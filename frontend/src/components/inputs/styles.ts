import styled from 'styled-components';
import { lighten } from 'polished';

export interface ILabelInputProps {
  labelText: string;
  placeholder: string;
  inputType: string;
  autoCompleted?: string;
  require?: boolean;
};
export const Fieldset = styled.fieldset`
  border: none;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 15px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 10px 0px 10px 10px;
  box-shadow: 0px 1px 4px 2px rgba(41,44,43,0.1);
  border-radius: 5px;
  border: none;
  background: #fff;
  &:focus {
    box-shadow: 0px 1px 4px 2px ${({theme}) => lighten(0.25, theme.colors.primary)};
  }
`;