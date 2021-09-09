import React from 'react';
import {
  ContainerEmpty,
  TextEmtpy,
} from './styles';
import { MdChat } from 'react-icons/md';

const ChatEmpty: React.FC = () => {
  return (
    <ContainerEmpty>
      <MdChat size='200px' color="#ACE7C9"/>
      <TextEmtpy>
        Selecione um grupo para inciar...
      </TextEmtpy>
    </ContainerEmpty>
  )
}

export default ChatEmpty;