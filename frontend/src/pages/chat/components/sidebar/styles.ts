import styled from 'styled-components';
import { lighten } from 'polished';
import { motion } from 'framer-motion';

export const Aside = styled.aside`
  background-color: ${({theme}) => theme.colors.tertiary};
  width: 384px;
  height: 100%;
  box-shadow: 2px 0px 10px rgba(105, 105, 105, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  padding-bottom: 50px;
`;

export const ContainerPadding = styled.div`
  padding: 40px 20px 0 20px;
`;

export const UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RoundedImage = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.primary};
  border: 3px solid ${({theme}) => theme.colors.primary};
`;

export const ContainerNameStatus = styled.em`
  font-style: normal;
`;

export const ProfileName = styled.h1`
  font-size: 26px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.secondary};
`;

export const ProfileStatus = styled.p`
  color: #ccc;
  font-size: 16px;
  font-weight: 300;
  margin-top: 5px;
`;

export const Separator = styled.div`
  margin: 30px 0;
  border: 1px solid ${({theme}) => lighten(0.1, theme.colors.tertiary)};
`;

export const ContainerTab = styled(motion.nav)`
  background-color: #444;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 50px;
  position: absolute;
  justify-content: space-between;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

export interface ICustomLinkTab {
  name: string;
  activeTab: string|null;
}
export const CustomLinkTab = styled.a<ICustomLinkTab>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 0px;
  color: ${({theme}) => theme.colors.primary};
  border-bottom: 3px solid transparent;
  border-color: ${({activeTab, name, theme}) => name === activeTab ? theme.colors.primary:'transparent'};
  transition: border-color 200ms 100ms ease;
  &:hover {
    border-color: ${({activeTab, name, theme}) => name === activeTab ? theme.colors.tertiary:'transparent'};
    color: ${({theme}) => theme.colors.tertiary};
    background-color: ${({theme}) => theme.colors.primary};
  }
`;

export const ContainerDropdown = styled.div`
  position: relative;
`;

export const ContainerIcon = styled(motion.div).attrs(() => ({
  initial: 'rotateDown',
  variants: {
    rotateDown: { 
      rotate: 0,
      transition: {
        delay: 0.3,
        duration: 0.2,
      },
    },
    rotateUp: { 
      rotate: 180,
      transition: { 
        delay: 0.2,
        duration: 0.2,
      },
    },
  }
}))`
  cursor: pointer;
  z-index: 10;
  position: inherit;
  svg {
    pointer-events: none;
  }
`;