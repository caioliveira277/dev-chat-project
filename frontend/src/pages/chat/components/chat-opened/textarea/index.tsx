import React from 'react';
import {
  Container,
  InputMessage
} from './styles';

const TextArea: React.FC = () => {
  return (
    <Container>
      <InputMessage
        placeholder='Escreva uma mensagem...' 
      />
    </Container>
  );
};

export default TextArea;