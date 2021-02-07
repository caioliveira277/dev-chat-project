import React, { useContext } from 'react';
import {
  Header,
  ContainerInfo,
  Image,
  Name,
  LinkInfo,
  ContainerEmpty,
  TextEmtpy,
  ContainerChat
} from './styles';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import TextArea from './input-message';
import MessageList from './message-list';
import { MdChat } from 'react-icons/md';
import { SelectedChat } from 'contexts';

const ChatOpened: React.FC = () => {
  const { group } = useContext(SelectedChat.Context);

  return !group?.id ? (
    <ContainerEmpty>
      <MdChat size='200px' color="#ACE7C9"/>
      <TextEmtpy>
        Selecione um grupo para inciar...
      </TextEmtpy>
    </ContainerEmpty>
  ): (
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
      <MessageList />
      <TextArea />
    </ContainerChat>
  );
};

export default ChatOpened;