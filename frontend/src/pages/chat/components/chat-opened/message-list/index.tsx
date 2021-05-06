import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  List
} from './styles';
import MessageCard from './message-card';
import {IMessageCardProps} from './message-card/styles';
import socket from 'adapters/ws';
import { Session } from 'contexts';

interface IMessage {
  message: {
    body: string,
    created_at: string
  },
  user: {
    id: number,
    name: string,
    profile_image: string
  }
}

const MessageList: React.FC = () => {
  const [ messageList, setMessageList ] = useState<IMessageCardProps[]>([]);
  const { id: userId } = useContext(Session.Context);
  
  useEffect(() => {
    socket.on('receive-sendMessage', (data: IMessage) => {
      setMessageList([
        ...messageList,
        {
          message: data.message.body,
          date: data.message.created_at,
          profile: data.user.profile_image,
          isCurrentUserMessage: userId === data.user.id ? true:false
        }
      ])
    });
  }, []);

  return (
    <Container>
      <List>
        {messageList.map((message) => (
          <MessageCard
            message={message.message} 
            profile='http://localhost:3000/assets/images/user-profiles/profile.png'
            date={message.date}
            isCurrentUserMessage={message.isCurrentUserMessage}
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

export default MessageList;