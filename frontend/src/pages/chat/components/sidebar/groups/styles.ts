import styled from 'styled-components';
import * as ChatList from '../chat-list/styles';

export const List = styled(ChatList.List)``;

export const Card = styled.li<ChatList.IGroupListInterface>`
  display: flex;
  justify-content: space-between;
  padding: 14px 8px;
  background: #444;
  border: 3px solid transparent;
  border-color: ${({color}) => color};
  border-radius: 5px;
  margin: 10px 20px;
`;

export const Image = styled(ChatList.Image)``;

export const ContainerText = styled(ChatList.ContainerText)``;

export const Name = styled(ChatList.Name)``;

export const TextMuted = styled(ChatList.TextMuted)``;

export const ContainerTitle = styled(ChatList.ContainerTitle)``;

export const ContainerSearch = styled(ChatList.ContainerSearch)``;

export const EnterButton = styled.button`
  cursor: pointer;
  background: ${({theme}) => theme.colors.contrast};
  color: ${({theme}) => theme.colors.tertiary};
  font-weight: bold;
  border: none;
  outline: none;
  padding: 2px 8px;
  border-radius: 30px;
  transition: all 150ms;
  &:hover {
    color: ${({theme}) => theme.colors.contrast};
    background: ${({theme}) => theme.colors.tertiary};
  }
`;