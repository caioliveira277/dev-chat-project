import styled from 'styled-components';
import { RoundedImage } from '../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 22px;
  color: ${({theme}) => theme.colors.secondary};
  font-weight: 400;
  margin-left: 20px;
`;

export const Form = styled.form`
  padding: 0px 30px;
  display: inherit;
  flex-direction: inherit;
  align-items: center;
  & > fieldset {
    margin-bottom: 25px;
  }
  & > button {
    margin-top: 10px;
  }
`;

export const FigureContainer = styled.figure`
  margin: 30px 0px;
  position: relative;
`;

export const RoundedImageProfile = styled(RoundedImage)`
`;

export const ButtonEditImage = styled.button`
  width: 30px;
  height: 30px;
  background: #444;
  border: 2px solid #d4d4d4;
  color: #d4d4d4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  right: -20px;
  top: -20px;
  position: absolute;
  transition: transform 100ms ease;
  &:hover {
    transform: scale(1.2);
  }
`;