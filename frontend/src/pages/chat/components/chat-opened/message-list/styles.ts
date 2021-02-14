import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.contrast};
  flex: 1;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 100%;
  padding: 10px 25px;
  list-style: none;
`;