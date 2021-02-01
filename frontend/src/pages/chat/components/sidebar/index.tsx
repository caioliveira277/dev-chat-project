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

const Sidebar: React.FC = () => {
  const theme = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Aside>
      <ContainerPadding>
        <UserProfile>
          <RoundedImage src='http://localhost:3000/assets/images/user-profiles/profile.png' alt='teste' />
          <ContainerNameStatus>
            <ProfileName>John Developer</ProfileName>
            <ProfileStatus># Só na boa</ProfileStatus>
          </ContainerNameStatus>
          <IoIosArrowDown size='30px' color={darken(0.15, theme.colors.primary)} />
        </UserProfile>
        <Separator />
        <SearchInput />
      </ContainerPadding>
      <ChatList />
      <ContainerTab animate={isVisible ? 'visible':'hidden'}>
        <Link to='/'><MdChat size='26px' /></Link>
        <Link to='/'><MdStar size='26px' /></Link>
        <Link to='/'><MdSettings size='26px' /></Link>
      </ContainerTab>
    </Aside>
  );
}

export default Sidebar;