import React from 'react';
import {
  Containers,
  Sidebars
} from 'components';
import {
  Container
} from './styles';

const Chat: React.FC = () => {
  return (
    <Containers.Main backgroundTheme='contrast' centralized={true}>
      <Container>
        <Sidebars.ChatSidebar />
      </Container>
    </Containers.Main>
  );
}

export default Chat;