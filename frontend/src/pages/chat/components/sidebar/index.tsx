import React, { useContext, useEffect, useState } from 'react';
import {
  Aside,
  UserProfile,
  RoundedImage,
  ContainerNameStatus,
  ProfileName,
  ProfileStatus,
  Separator,
  ContainerPadding,
  ContainerTab
} from './styles';
import { IoIosArrowDown } from 'react-icons/io';
import { ThemeContext } from 'styled-components';
import { darken } from 'polished';
import { SearchInput } from 'components/inputs';
import ChatList from './chat-list';
import { Link } from 'react-router-dom';
import { MdChat, MdStar, MdSettings } from 'react-icons/md';
import { Session } from 'contexts';
import { Group } from 'adapters/chat/group';
import { IGroupResponse } from 'axios';

const Sidebar: React.FC = () => {
  const [ groupList, setGroupList ] = useState<IGroupResponse[]>([]);
  const theme = useContext(ThemeContext);
  const { 
    id,
    name, 
    profile_status,
    profile_image
  } = useContext(Session.Context);

  useEffect(() => {
    const group = new Group({userId: id});
    
    group.getUserGroups()
      .then(({data}) => {
        setGroupList(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [id]);

  return (
    <Aside>
      <ContainerPadding>
        <UserProfile>
          <RoundedImage 
            src={`${process.env.REACT_APP_API_BASE_URL}/assets/images/user-profiles/${profile_image || 'profile.png'}`} 
            alt={`Foto de perfil de ${name}`} 
          />
          <ContainerNameStatus>
            <ProfileName>{name}</ProfileName>
            <ProfileStatus># {profile_status}</ProfileStatus>
          </ContainerNameStatus>
          <IoIosArrowDown size='30px' color={darken(0.15, theme.colors.primary)} />
        </UserProfile>
        <Separator />
        <SearchInput />
      </ContainerPadding>
      <ChatList data={groupList} />
      <ContainerTab>
        <Link to='/'><MdChat size='26px' /></Link>
        <Link to='/'><MdStar size='26px' /></Link>
        <Link to='/'><MdSettings size='26px' /></Link>
      </ContainerTab>
    </Aside>
  );
}

export default Sidebar;