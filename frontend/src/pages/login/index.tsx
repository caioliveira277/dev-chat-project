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
import { Link, useHistory } from 'react-router-dom';
import { IoLogoGoogle } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';

const Login: React.FC = () => {
  const history = useHistory();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlerSubmit = (): void => {
    history.push('/chat');
  }

  return (
    <Containers.Main backgroundTheme='contrast' centralized={true}>
      <Container animate={isVisible ? 'visible':'hidden'}>
        <TextContainer>
          <Title>Acesse sua conta</Title>
          <Subtitle>Acesse selecionando uma das opções abaixo:</Subtitle>
        </TextContainer>
        <LoginContainer>
          <Form onSubmit={handlerSubmit}>
            <Inputs.LabelInput
              inputType='email'
              labelText='Email:'
              placeholder='Informe o seu email'
              autoCompleted='email'
              require={true}
              />
            <Inputs.LabelInput
              inputType='password'
              labelText='Senha:'
              placeholder='Informe a sua senha'
              require={true}
            />
            <Buttons.ButtonTheme
              type='submit'
              backgroundTheme='primary'
              textCustomColor='#fff'
            >
              Entrar
            </Buttons.ButtonTheme>
          </Form>
          <Separator />
          <ContainerSocialLogin>
            <Buttons.ButtonTheme
              type='button'
              backgroundTheme='tertiary'
              textCustomColor='#fff'
            >
              <IoLogoGoogle size='20px'/>
              Entrar com o Google
            </Buttons.ButtonTheme>
            <Buttons.ButtonTheme
              type='button'
              backgroundTheme='tertiary'
              textCustomColor='#fff'
            >
              <AiFillGithub size='20px'/>
              Entrar com o GitHub
            </Buttons.ButtonTheme>
          </ContainerSocialLogin>
        </LoginContainer>
        <LinkNewAccount>
          Novo por aqui? <Link to='/signin'>Criar uma conta</Link>
        </LinkNewAccount>
      </Container>
    </Containers.Main>
  );
}

export default Login;