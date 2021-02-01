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
  background-color: #fff;
  &:focus {
    box-shadow: 0px 1px 4px 2px ${({theme}) => lighten(0.25, theme.colors.primary)};
  }
`;


export const ContainerSearchInput = styled.div`
  position: relative;
  & > svg {
    position: absolute;
    top: 50%;
    left: 13px;
    transform: translateY(-50%);
    color: #D4D4D4;
  }
`;

export const InputSearch = styled.input`
  color: #fafafa;
  border: 1px solid #7B7B7B;
  padding: 12px 0px 12px 45px;
  font-size: 20px;
  width: 100%;
  border-radius: 5px;
  background: #444444;
  &::placeholder {
    color: #D4D4D4
  }
`;