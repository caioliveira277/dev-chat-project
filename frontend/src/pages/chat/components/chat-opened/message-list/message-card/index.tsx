import React from 'react';
import {
  ContainerItem,
  ContainerContent,
  Profile,
  Content,
  Text,
  MessageDate,
  IMessageCardProps,
  ContainerItemEnd
} from './styles';

const MessageCard: React.FC<IMessageCardProps> = ({
  isCurrentUserMessage,
  date,
  profile,
  message
}) => {
  return isCurrentUserMessage ? (
    <ContainerItem>
      <MessageDate>{date}</MessageDate>
      <ContainerContent>
        <Profile src={profile} alt='teste' />
        <Content currentUser={false}>
          <Text>
            {message}
          </Text>
        </Content>
      </ContainerContent>
    </ContainerItem>
  ) : (
    <ContainerItemEnd>
      <MessageDate>{date}</MessageDate>
      <ContainerContent>
        <Content currentUser={true}>
          <Text>
            {message}
          </Text>
        </Content>
        <Profile src={profile} alt='teste' />
      </ContainerContent>
    </ContainerItemEnd>

  );
}

export default MessageCard;