import React, { useContext, useEffect, useState } from 'react';
import {
  Header,
  ContainerInfo,
  Image,
  Name,
  LinkInfo,
  ContainerChat
} from './styles';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import TextArea from './input-message';
import { MessageList, IMessage } from './message-list';
import { SelectedChat } from 'contexts';
import socket from 'adapters/ws';

const ChatOpened: React.FC = () => {
  const group = useContext(SelectedChat.Context);
  const [ messageList, setMessageList ] = useState<IMessage[]>([]);

  useEffect(() => {
    socket.emit('request-groupMessages', group.id);

    socket.on('receive-groupMessages', (data: IMessage[]) => {
      setMessageList(data);
    });

    socket.on('receive-sendMessage', (data: IMessage) => {
      setMessageList((value) => {
        return [...value, {
          message: data.message,
          user: data.user
        }];
      });
    });
  }, []);

  return (
    <ContainerChat animate={group?.id ? 'visible':'hidden'}>
      <Header color={group?.color}>
        <ContainerInfo>
          <Image
            src={`${process.env.REACT_APP_ASSETS_GROUPS_PROFILES}/${group?.image}`}
            alt={`Foto do grupo ${group?.name}`}
          />
          <Name>{group.name}</Name>
        </ContainerInfo>
        <LinkInfo href='#'>
          <BsFillInfoCircleFill size='26px' />
        </LinkInfo>
      </Header>
      <MessageList messages={messageList} />
      <TextArea />
    </ContainerChat>
  );
};

export default ChatOpened;