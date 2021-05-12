import React, { useContext } from 'react';
import {
  Container,
  List
} from './styles';
import MessageCard from './message-card';
import { Session } from 'contexts';

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
  return (
    <Container>
      <List>
        {messages.map(({message, user}) => (
          <MessageCard
            key={message.id}
            message={message.body} 
            profile='http://localhost:3000/assets/images/user-profiles/profile.png'
            date={message.created_at}
            isCurrentUserMessage={user.id === userId ? true:false}
          />
        ))}
        {/* <MessageCard
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," 
          profile='http://localhost:3000/assets/images/user-profiles/profile.png'
          date='22/12 10:45hrs'
          isCurrentUserMessage={false}
        />
        <MessageCard
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," 
          profile='http://localhost:3000/assets/images/user-profiles/user1.png'
          date='22/12 10:45hrs'
          isCurrentUserMessage={true}
        /> */}
      </List>
    </Container>
  );
}