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
  autoComplete = 'off',
  require = false,
  value,
  onChange,
  name,
  dark = false
}) => {
  return (
    <Fieldset>
      <Label dark={dark}>{labelText}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={require}
        value={value}
        onChange={onChange}
        name={name}
        dark={dark}
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