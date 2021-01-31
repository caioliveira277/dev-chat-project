import React from 'react';
import {
  ContainerCardGroupItem,
  ContainerGroupContent,
  ContainerGroupImageContent,
  GroupImage,
  GroupName,
  GroupTextMuted,
  ListCardGroups,
  ContainerTitle,
} from './styles';

export const CardGroupList: React.FC = () => {
  return (
    <ListCardGroups>
      {Array(1).fill('teste').map(({index}) => (
        <ContainerCardGroupItem groupColor='#3075C0' key={1}>
          <ContainerGroupImageContent>
            <GroupImage src='http://localhost:3000/assets/images/group-profiles/ts.png' alt='teste' />
            <ContainerGroupContent>
              <ContainerTitle>
                <GroupName>Typescript</GroupName>
                <GroupTextMuted>22/12 10:45hrs</GroupTextMuted>
              </ContainerTitle>
              <GroupTextMuted>Sim, são varias vantangens...</GroupTextMuted>
            </ContainerGroupContent>
          </ContainerGroupImageContent>
        </ContainerCardGroupItem>
      ))}
    </ListCardGroups>
  );
}