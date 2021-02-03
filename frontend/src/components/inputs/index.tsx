import React from 'react';
import { 
  Fieldset, 
  Label, 
  Input, 
  ILabelInputProps,
  ContainerSearchInput,
  InputSearch
} from './styles';
import { HiSearch } from 'react-icons/hi';

export const LabelInput: React.FC<ILabelInputProps> = ({
  labelText,
  placeholder,
  type,
  autoCompleted = '',
  require = false,
  value,
  onChange,
  name
}) => {
  return (
    <Fieldset>
      <Label>{labelText}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        autoComplete={autoCompleted}
        required={require}
        value={value}
        onChange={onChange}
        name={name}
      />
    </Fieldset>
  );
}

export const SearchInput: React.FC = () => {
  return (
    <ContainerSearchInput className='input-search'>
      <HiSearch size='25px' />
      <InputSearch
        type='text'
        placeholder='Buscar grupos'
      />
    </ContainerSearchInput>
  );
}