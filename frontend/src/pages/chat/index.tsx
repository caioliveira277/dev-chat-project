import React from 'react';
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

const Chat: React.FC = () => {
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