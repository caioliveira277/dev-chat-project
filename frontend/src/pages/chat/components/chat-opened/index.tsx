import React, { useState } from 'react';
import {
  Container,
  Header,
  ContainerInfo,
  Image,
  Name,
  LinkInfo,
  ContainerEmpty,
  TextEmtpy
} from './styles';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import TextArea from './input-message';
import MessageList from './message-list';
import { MdChat } from 'react-icons/md';

const ChatOpened: React.FC = () => {
  const [ selectedChat, setSelectedChat ] = useState(false);
  return (
    <Container>
      {!selectedChat ? (
        <ContainerEmpty>
          <MdChat size='200px' color="#ACE7C9"/>
          <TextEmtpy>
            Selecione um grupo para inciar...
          </TextEmtpy>
        </ContainerEmpty>
      ): (
        <>
          <Header color='#3075C0'>
            <ContainerInfo>
              <Image src='http://localhost:3000/assets/images/group-profiles/typescript.png' alt='teste' />
              <Name>Typescript</Name>
            </ContainerInfo>
            <LinkInfo href='#'>
              <BsFillInfoCircleFill size='26px' />
            </LinkInfo>
          </Header>
          <MessageList />
          <TextArea />
        </>
      )}
    </Container>
  );
};

export default ChatOpened;