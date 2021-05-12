import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  border: 1px solid #E8E8E8;
  background-color: ${({theme}) => theme.colors.secondary};
  display: flex;
  align-items: center;
  padding-right: 20px;
  margin-top: auto;
  & > button:first-of-type {
    margin-left: 10px;
  }
  & > button:last-of-type {
    margin-left: 25px;
  }
`;

export const TextArea = styled.textarea`
  background-color: ${({theme}) => theme.colors.secondary};
  padding: 25px 20px;
  border: none;
  width: 100%;
  resize: none;
`;