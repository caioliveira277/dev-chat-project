import React from 'react';
import {
  Container,
  Header,
  ContainerInfo,
  Image,
  Name,
  LinkInfo
} from './styles';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import TextArea from './input-message';
import MessageList from './message-list';

const ChatOpened: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default ChatOpened;