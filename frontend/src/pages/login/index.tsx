import React, { useEffect, useState } from 'react';
import { 
  Containers,
  Inputs,
  Buttons
} from 'components';
import { 
  Container, 
  Title, 
  Subtitle,
  TextContainer,
  LoginContainer,
  Form,
  Separator,
  ContainerSocialLogin,
  LinkNewAccount
} from './styles';
import { IoLogoGoogle } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';

const Login: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <Containers.Main backgroundTheme='contrast' centralized={true}>
      <Container animate={isVisible ? 'visible':'hidden'}>
        <TextContainer>
          <Title>Acesse sua conta:</Title>
          <Subtitle>Acesse sua conta selecionando uma das opções abaixo:</Subtitle>
        </TextContainer>
        <LoginContainer>
          <Form>
            <Inputs.LabelInput
              inputType='email'
              labelText='Email:'
              placeholder='Informe seu email'
              autoCompleted='email'
              require={true}
              />
            <Inputs.LabelInput
              inputType='password'
              labelText='Senha:'
              placeholder='Informe sua senha'
              require={true}
            />
            <Buttons.ButtonTheme
              buttonType='submit'
              backgroundTheme='primary'
              textCustomColor='#fff' 
            >
              Entrar
            </Buttons.ButtonTheme>
          </Form>
          <Separator />
          <ContainerSocialLogin>
            <Buttons.ButtonTheme
              buttonType='button'
              backgroundTheme='tertiary'
              textCustomColor='#fff'
            >
              <IoLogoGoogle size='20px'/>
              Entrar com o Google
            </Buttons.ButtonTheme>
            <Buttons.ButtonTheme
              buttonType='button'
              backgroundTheme='tertiary'
              textCustomColor='#fff'
            >
              <AiFillGithub size='20px'/>
              Entrar com o GitHub
            </Buttons.ButtonTheme>
          </ContainerSocialLogin>
        </LoginContainer>
        <LinkNewAccount>
          Novo por aqui? <a href="#">Criar uma conta</a>
        </LinkNewAccount>
      </Container>
    </Containers.Main>
  );
}

export default Login;