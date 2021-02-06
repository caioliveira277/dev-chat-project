import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  background-color: ${({theme}) => theme.colors.secondary};
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export interface IHeaderProps {
  color: string;
};
export const Header = styled.header<IHeaderProps>`
  background-color: ${({theme}) => theme.colors.tertiary};
  padding: 10px 20px;
  width: 100%;
  border-bottom: 3px solid ${({color}) => color};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Name = styled.h2`
  font-weight: 400;
  font-size: 26px;
  color: ${({theme}) => theme.colors.secondary};
`;

export const LinkInfo = styled.a`
  color: ${({theme}) => theme.colors.secondary};
  display: flex;
  &:hover {
    color: ${({theme}) => darken(0.07, theme.colors.secondary)};
  }
`;

export const ContainerEmpty = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextEmtpy = styled.h2`
  color: #BFC0BF;
  font-size: 28px;
  font-weight: 400;
`;