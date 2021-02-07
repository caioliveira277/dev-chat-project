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
  ContainerTab,
  ContainerDropdown,
  ContainerIcon
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
import Dropdown from './dropdown';

const Sidebar: React.FC = () => {
  const [ groupList, setGroupList ] = useState<IGroupResponse[]>([]);
  const [ showDropdown, setShowDropdown ] = useState<boolean>(false);
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

  const handlerDropdown = (state: boolean): void => {
    setShowDropdown(state);
  }

  return (
    <Aside>
      <ContainerPadding>
        <UserProfile>
          <RoundedImage
            src={`${process.env.REACT_APP_ASSETS_USERS_PROFILES}/${profile_image || 'profile.png'}`} 
            alt={`Foto de perfil de ${name}`} 
          />
          <ContainerNameStatus>
            <ProfileName>{name}</ProfileName>
            <ProfileStatus># {profile_status}</ProfileStatus>
          </ContainerNameStatus>
          <ContainerDropdown>
            <ContainerIcon onClick={() => handlerDropdown((showDropdown ? false:true))} animate={showDropdown ? 'rotateUp':'rotateDown'}>
              <IoIosArrowDown size='30px' color={darken(0.15, theme.colors.primary)} />
            </ContainerIcon>
            <Dropdown show={showDropdown} emitClose={handlerDropdown} />
          </ContainerDropdown>
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