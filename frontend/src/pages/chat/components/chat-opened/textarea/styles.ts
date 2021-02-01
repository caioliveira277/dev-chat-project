import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid #E8E8E8;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const InputMessage = styled.textarea`
  background-color: ${({theme}) => theme.colors.secondary};
  padding: 25px 20px;
  border: none;
  width: 100%;
`;