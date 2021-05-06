import styled from 'styled-components';

export interface IMessageCardProps {
  isCurrentUserMessage: boolean;
  date: string;
  profile: string;
  message: string;
};

export const ContainerItem = styled.li`
  width: 100%;
  margin: 20px 0;
`;

export const ContainerItemEnd = styled(ContainerItem)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const ContainerContent = styled.div`
  display: flex;
`;

export const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export interface IContentProps {
  currentUser: boolean;
}
export const Content = styled.div<IContentProps>`
  background-color: ${({theme, currentUser}) => currentUser ? '#79807D':theme.colors.tertiary};
  width: 400px;
  border-radius: 8px;
  padding: 20px 15px;

  margin-left: ${({currentUser}) => currentUser ? '0':'15px'};
  margin-right: ${({currentUser}) => currentUser ? '15px':'0px'};

  border-top-left-radius: ${({currentUser}) => currentUser ? '8px':'0px'};
  border-top-right-radius: ${({currentUser}) => currentUser ? '0px':'8px'};

  box-shadow: 0px 2px 10px rgba(105, 105, 105, 0.5);
  margin-top: 10px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    border: 1px dashed #C8C8C8;
    top: -16px;
    left: 50%;
    transform: translateY(-50%);
    height: 30px;
  }
  &:after {
    content: '';
    position: absolute;
    border: 1px dashed #C8C8C8;
    top: -32px;
    width: 50%;
    right: ${({currentUser}) => currentUser ? '0px':'initial'};
    left: ${({currentUser}) => currentUser ? 'initial':'0px'};
  }
`;

export const Text = styled.p`
  color: ${({theme}) => theme.colors.secondary};
  font-size: 14px;
  line-height: 22px;
`;

export const MessageDate = styled.span`
  font-size: 14px;
  color: #000;
  margin-bottom: 20px;
  font-weight: 300;
  display: block;
`;