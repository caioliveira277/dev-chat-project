import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface IDark {
  dark?: boolean;
}
export interface ILabelInputProps extends InputHTMLAttributes<HTMLInputElement>, IDark {
  labelText: string;
  type: string;
  require: boolean;
};
export const Fieldset = styled.fieldset`
  border: none;
`;

export const Label = styled.label<IDark>`
  font-size: 18px;
  margin-bottom: 15px;
  display: block;
  color: ${({theme, dark}) => dark ? theme.colors.secondary : theme.colors.tertiary};
`;

export const Input = styled.input<IDark>`
  width: 100%;
  font-size: 14px;
  padding: 10px 0px 10px 10px;
  box-shadow: 0px 1px 4px 2px rgba(41,44,43,0.1);
  border-radius: 5px;
  border: 1px solid;
  border-color: ${({dark}) => dark ? '#7b7b7b' : 'transparent'};
  background-color: ${({dark}) => dark ? '#444' : '#fff'};
  color: ${({dark, theme}) => dark ? theme.colors.secondary : theme.colors.tertiary};
  &::placeholder {
    color: ${({dark}) => dark ? '#d4d4d4' : '#A8A8A8'};
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