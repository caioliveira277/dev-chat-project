import React from 'react';
import {
  Card,
  ContainerText,
  Image,
  Name,
  TextMuted,
  List,
  ContainerTitle,
} from './styles';

const ChatList: React.FC = () => {
  return (
    <List>
      {Array(1).fill('teste').map(() => (
        <Card color='#3075C0' key={1}>
          <Image src='http://localhost:3000/assets/images/group-profiles/ts.png' alt='teste' />
          <ContainerText>
            <ContainerTitle>
              <Name>Typescript</Name>
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