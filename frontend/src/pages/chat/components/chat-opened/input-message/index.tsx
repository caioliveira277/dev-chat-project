import React, { useContext } from 'react';
import {
  Container,
  TextArea
} from './styles';
import { ThemeContext } from 'styled-components';
import { Buttons } from 'components';
import { FiPaperclip } from 'react-icons/fi';
import { IoPaperPlane } from 'react-icons/io5'; 

const InputMessage: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <TextArea
        placeholder='Escreva uma mensagem...'
        required={true}
      />
      <Buttons.ButtonThemeRounded
        type='button'
        backgroundCustomColor='#A0B1FE'
        size='50px'
      >
        <FiPaperclip size='26px' color={theme.colors.tertiary} />
      </Buttons.ButtonThemeRounded>
      <Buttons.ButtonThemeRounded
        type='submit'
        backgroundCustomColor={theme.colors.primary}
        size='50px'
      >
        <IoPaperPlane size='26px' color={theme.colors.tertiary} />
      </Buttons.ButtonThemeRounded>
    </Container>
  );
};

export default InputMessage;