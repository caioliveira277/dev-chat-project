import React from 'react';
import {
  Card,
  ContainerText,
  Image,
  Name,
  TextMuted,
  List,
  ContainerTitle,
  IListData
} from './styles';

const ChatList: React.FC<IListData> = ({
  data
}) => {
  return (
    <List>
      {data.map((chat, index) => (
        <Card color='#3075C0' key={index}>
          <Image 
            src={`${process.env.REACT_APP_API_BASE_URL}/assets/images/group-profiles/${chat.group.image}`} 
            alt={`Foto do grupo ${chat.group.name}`}
          />
          <ContainerText>
            <ContainerTitle>
              <Name>{chat.group.name}</Name>
              <TextMuted>22/12 10:45hrs</TextMuted>
            </ContainerTitle>
            <TextMuted>Sim, são varias vantangens...</TextMuted>
          </ContainerText>
        </Card>
      ))}
    </List>
  );
}

export default ChatList;