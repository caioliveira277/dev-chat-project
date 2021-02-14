import styled from 'styled-components';
import * as LoginStyles from 'pages/login/styles';

export const Container = styled(LoginStyles.Container)`
  width: 530px;
`;

export const TextContainer = styled(LoginStyles.TextContainer)``;

export const Title = styled(LoginStyles.Title)``;

export const Subtitle = styled(LoginStyles.Subtitle)``;

export const LoginContainer = styled(LoginStyles.LoginContainer)`
  justify-content: center;
`;

export const Form = styled(LoginStyles.Form)`
  & > fieldset {
    margin-bottom: 30px
  }
  & > fieldset:last-of-type {
    margin-bottom: 0px;
  }
`;

export const LinkNewAccount = styled(LoginStyles.LinkNewAccount)``;