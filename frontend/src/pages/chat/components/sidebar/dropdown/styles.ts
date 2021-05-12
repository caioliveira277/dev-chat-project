import styled from 'styled-components';
import { darken } from 'polished';
import { motion,  } from 'framer-motion';

export interface IDropdown {
  show: boolean;
  emitClose: (state: boolean) => void;
};
export const Container = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: { 
      opacity: 0,
      y: '-20%',
      transition: { 
        duration: 0.2,
      },
      transitionEnd: {
        display: 'none',
      }
    },
    visible: { 
      display: 'block',
      opacity: 1,
      y: '0%',
      transition: { 
        duration: 0.2,
      },
    },
  }
}))`
  border-radius: 5px;
  width: 150px;
  background-color: ${({theme}) => theme.colors.contrast};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  position: absolute;
  margin-top: 15px;
  right: 0;
  z-index: 10;
  &::before {
    content: '';
    background: inherit;
    position: absolute;
    top: -12px;
    right: 5px;
    width: 20px;
    height: 13px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  padding: 10px;
`;

export interface ILink {
  statusColor: string;
};
export const Link = styled.a<ILink>`
  font-size: 14px;
  color: ${({theme}) => theme.colors.tertiary};
  margin-top: 5px;
  text-decoration: none;
  display: block;
  padding: 10px 27px;
  &:hover {
    background-color: #D8D8D8;
    color: ${({theme}) => theme.colors.tertiary};
  }
  &::before {
    content: '';
    display: inline-block;
    margin-right: 10px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({statusColor}) => statusColor};
  }
`;

export const LinkLoggout = styled.a`
  text-decoration: none;
  font-size: 16px;
  width: 100%;
  background-color: #D8D8D8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.tertiary};
  padding: 12px 0px;
  margin-top: 10px;
  border-radius: 0px 0px 5px 5px;
  &:hover {
    background-color: ${({theme}) => darken(0.04, theme.colors.contrast)};
    color: ${({theme}) => theme.colors.tertiary};
  }
  svg {
    margin-right: 10px;
  }
`;

export const Mask = styled.div<Omit<IDropdown, 'emitClose'>>`
  display: ${({show}) => show ? 'block':'none'};
  position: absolute;
  background: transparent;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 0;
`;