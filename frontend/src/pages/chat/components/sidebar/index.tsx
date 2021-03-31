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
  ContainerIcon,
  CustomLinkTab
} from './styles';
import { IoIosArrowDown } from 'react-icons/io';
import { ThemeContext } from 'styled-components';
import { darken } from 'polished';
import ChatList from './chat-list';
import { useHistory, useLocation } from 'react-router-dom';
import { MdChat, MdStar, MdSettings } from 'react-icons/md';
import { Session } from 'contexts';
import { IGroupResponse } from 'axios';
import Dropdown from './dropdown';
import Settings from './settings';
import socket from 'adapters/ws';

const Sidebar: React.FC = () => {
  const [ groupList, setGroupList ] = useState<IGroupResponse[]>([]);
  const [ showDropdown, setShowDropdown ] = useState<boolean>(false);
  const history = useHistory();
  const theme = useContext(ThemeContext);
  const { 
    id,
    name, 
    profile_status,
    profile_image
  } = useContext(Session.Context);

  const useQuery = (): URLSearchParams => {
    return new URLSearchParams(useLocation().search);
  }
  const tabQuery = useQuery().get('tab') || 'chats';

  useEffect(() => {
    socket.emit('request-groups', id);
    socket.on('receive-groups', (data: IGroupResponse[]) => {
      setGroupList(data);
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
      </ContainerPadding>
      {
        tabQuery === 'chats' ? (
          <ChatList data={groupList} />
        ) : tabQuery === 'favoritos' ? (
            <></>
        ) : tabQuery === 'ajustes' ? (
          <Settings />
        ) : null
      }
      <ContainerTab>
        <CustomLinkTab 
          onClick={() => history.push('/chat?tab=chats')}
          name='chats'
          activeTab={tabQuery}
        >
          <MdChat size='26px' />
        </CustomLinkTab>
        <CustomLinkTab 
          onClick={() => history.push('/chat?tab=favoritos')}
          name='favoritos'
          activeTab={tabQuery}
        >
          <MdStar size='26px' />
        </CustomLinkTab>
        <CustomLinkTab 
          onClick={() => history.push('/chat?tab=ajustes')}
          name='ajustes'
          activeTab={tabQuery}
        >
          <MdSettings size='26px' />
        </CustomLinkTab>
      </ContainerTab>
    </Aside>
  );
}

export default Sidebar;