import React, { useEffect } from 'react';
import {
  Containers,
} from 'components';
import {
  Container
} from './styles';
import { 
  Sidebar,
  ChatOpened
} from './components';
import socket from 'adapters/ws';

const Chat: React.FC = () => {

  useEffect(() => {
    socket.on('connection', () => {
      console.log('here');
    });
  })

  return (
    <Containers.Main backgroundTheme='contrast' centralized={true}>
      <Container>
        <Sidebar />
        <ChatOpened />
      </Container>
    </Containers.Main>
  );
}

export default Chat;