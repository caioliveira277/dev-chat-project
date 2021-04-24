import React, { useEffect, useContext, useState } from 'react';
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
import { Session } from 'contexts';
import socket from 'adapters/ws';

const Chat: React.FC = () => {
  const [ groupList, setGroupList ] = useState<Sidebar.ISidebar['groupList']>({} as Sidebar.ISidebar['groupList']);
  const [ availableGroupList, setAvailableGroupList ] = useState<Sidebar.ISidebar['availableGroupList']>([]);

  const { id } = useContext(Session.Context);

  useEffect(() => {
    socket.connect();

    /* user groups */
    socket.emit('request-groups', id);
    socket.on('receive-groups', (data: Sidebar.ISidebar['groupList']) => {
      setGroupList(data);
    });
    
    /* available groups */
    socket.emit('request-availableGroups');
    socket.on('receive-availableGroups', (data: Sidebar.ISidebar['availableGroupList']) => {
      setAvailableGroupList(data);
    });
  }, [id]);

  return (
    <Containers.Main backgroundTheme='contrast' centralized={true}>
      <Container>
        <Sidebar.Sidebar groupList={groupList} availableGroupList={availableGroupList} />
        <ChatOpened />
      </Container>
    </Containers.Main>
  );
}

export default Chat;