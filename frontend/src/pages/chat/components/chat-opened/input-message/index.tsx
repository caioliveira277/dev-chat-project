import React, { useContext, FormEventHandler, useState, KeyboardEventHandler } from 'react';
import {
  Container,
  TextArea
} from './styles';
import { ThemeContext } from 'styled-components';
import { Buttons } from 'components';
import { FiPaperclip } from 'react-icons/fi';
import { IoPaperPlane } from 'react-icons/io5';
import socket from 'adapters/ws';
import { Session } from 'contexts';
import { SelectedChat } from 'contexts';

const InputMessage: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { id: user_sender_id } = useContext(Session.Context);
  const { id: group_id } = useContext(SelectedChat.Context);

  const [ valueInputMessage, setValueInputMessage ] = useState('');

  const handlerSubmit: FormEventHandler = (event): void => {
    event.preventDefault();
    sendMessage();
  };

  const handlerKeyPress: KeyboardEventHandler = (event): void => {
    if(event.which === 13 && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    setValueInputMessage('');
    
    socket.emit('request-sendMessage', {
      user_sender_id,
      body: valueInputMessage,
      type: 'text',
      group_id
    });
  };

  return (
    <Container onSubmit={handlerSubmit}>
      <TextArea
        placeholder='Escreva uma mensagem...'
        required={true}
        autoFocus
        value={valueInputMessage}
        onChange={({target: {value}}) => setValueInputMessage(value)}
        onKeyPress={handlerKeyPress}
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