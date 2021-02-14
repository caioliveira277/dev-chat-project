import React, { useContext } from 'react';
import {
  Card,
  ContainerText,
  Image,
  Name,
  TextMuted,
  List,
  ContainerTitle,
  IListData,
  ContainerSearch
} from './styles';
import { SelectedChat } from 'contexts';
import { IGroupResponse } from 'axios';
import { Inputs } from 'components';

const ChatList: React.FC<IListData> = ({ data }) => {
  const { setSelectedChat, group } = useContext(SelectedChat.Context); 

  const handlerSelectedChat = (chat: IGroupResponse): void => {
    if(chat.group.id === group?.id) return;
    setSelectedChat(chat);
  }

  return (
    <>
      <ContainerSearch>
        <Inputs.SearchInput />
      </ContainerSearch>
      <List>
        {data.map((chat, index) => (
          <Card 
            color={chat.group.color} 
            key={index} 
            active={group?.id === chat.group.id ? true:false}  
            onClick={() => handlerSelectedChat(chat)}
          >
            <Image 
              src={`${process.env.REACT_APP_ASSETS_GROUPS_PROFILES}/${chat.group.image}`}
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
    </>
  );
}

export default ChatList;