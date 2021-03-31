import React from 'react';
import {
  Container,
  List
} from './styles';
import MessageCard from './message-card';

const MessageList: React.FC = () => {
  return (
    <Container>
      <List>
        <MessageCard
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
        />
      </List>
    </Container>
  );
}

export default MessageList;