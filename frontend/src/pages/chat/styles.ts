import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  max-width: 1320px;
  background: ${({theme}) => theme.colors.secondary};
  display: flex;
`;