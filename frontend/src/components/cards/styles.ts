import styled from 'styled-components';

export interface IGroupListInterface {
  groupColor: string;
};

export const ListCardGroups = styled.ul`
  list-style: none;
  margin: 40px 0 0 0;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ContainerCardGroupItem = styled.li<IGroupListInterface>`
  display: flex;
  justify-content: space-between;
  padding: 14px 8px;
  background: #444;
  border: 3px solid transparent;
  border-left-color: ${({groupColor}) => groupColor};
  border-radius: 5px;
  transition: transform 100ms ease-in;
  transform-origin: left bottom;
  cursor: pointer;
  margin: 10px 20px;
  transition: all 150ms ease;
  &:hover {
    border-color: ${({groupColor}) => groupColor};
  }
`;

export const GroupImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ContainerGroupImageContent = styled.div`
  width: 100%;
  display: flex;
`;

export const ContainerGroupContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GroupName = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.secondary};
`;

export const GroupTextMuted = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #A8A8A8;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;