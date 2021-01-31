import React from 'react';
import { Fieldset, Label, Input, ILabelInputProps } from './styles';

export const LabelInput: React.FC<ILabelInputProps> = ({
  labelText,
  placeholder,
  inputType,
  autoCompleted = '',
  require = false
}) => {
  return (
    <Fieldset>
      <Label>{labelText}</Label>
      <Input
        type={inputType}
        placeholder={placeholder}
        autoComplete={autoCompleted}
        required={require}
      />
    </Fieldset>
  );
}