import React, { useContext } from 'react';
import {
  Card,
  ContainerText,
  Image,
  Name,
  TextMuted,
  List,
  ContainerTitle,
  ContainerSearch
} from './styles';
import { SelectedChat } from 'contexts';
import { IGroupResponse } from 'axios';
import { Inputs } from 'components';

export interface IListData {
  data: { group: IGroupResponse }[]
}
export const ChatList: React.FC<IListData> = ({ data }) => {
  const { setSelectedChat, id: groupId } = useContext(SelectedChat.Context); 
  const handlerSelectedChat = (group: IGroupResponse): void => {
    if(group.id === groupId) return;
    setSelectedChat(group);
  }

  return (
    <>
      <ContainerSearch>
        <Inputs.SearchInput />
      </ContainerSearch>
      <List>
        {
          data.length ? (
            data.map(({group}, index) => (
              <Card 
                color={group.color} 
                key={index} 
                active={groupId === group.id ? true:false}  
                onClick={() => handlerSelectedChat(group)}
              >
                <Image 
                  src={`${process.env.REACT_APP_ASSETS_GROUPS_PROFILES}/${group.image}`}
                  alt={`Foto do grupo ${group.name}`}
                />
                <ContainerText>
                  <ContainerTitle>
                    <Name>{group.name}</Name>
                    <TextMuted>22/12 10:45hrs</TextMuted>
                  </ContainerTitle>
                  <TextMuted>Sim, são varias vantangens...</TextMuted>
                </ContainerText>
              </Card>
            ))
          ) : null 
        }
      </List>
    </>
  );
}
