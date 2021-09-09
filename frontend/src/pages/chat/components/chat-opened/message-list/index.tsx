import React, { useContext, useRef, useEffect } from 'react';
import {
  Container,
  List
} from './styles';
import MessageCard from './message-card';
import { Session } from 'contexts';
import { datetimeToPtBr } from 'components/utils';

export interface IMessage {
  message: {
    id: number,
    body: string,
    created_at: string
  },
  user: {
    id: number,
    name: string,
    profile_image: string
  }
}
interface IMessagesList {
  messages: IMessage[]
}

export const MessageList: React.FC<IMessagesList> = ({messages}) => {
  const { id: userId } = useContext(Session.Context);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current?.scrollHeight);
  }, [messages]);

  return (
    <Container>
      <List ref={listRef}>
        {messages.map(({message, user}) => (
          <MessageCard
            key={message.id}
            message={message.body} 
            profile={`${process.env.REACT_APP_ASSETS_USERS_PROFILES}/${user.profile_image || 'profile.png'}`}
            date={datetimeToPtBr(message.created_at)}
            isCurrentUserMessage={user.id === userId ? true:false}
          />
        ))}
      </List>
    </Container>
  );
}