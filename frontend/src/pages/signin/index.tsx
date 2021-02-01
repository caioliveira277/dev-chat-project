import React, { useEffect, useState } from 'react';
import {
  Containers,
  Inputs,
  Buttons
} from 'components';
import {
  Container,
  TextContainer,
  Title,
  Subtitle,
  LoginContainer,
  Form,
  LinkNewAccount
} from './styles';
import { Link } from 'react-router-dom';

const Signin: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <Containers.Main backgroundTheme='contrast' centralized={true}>
      <Container animate={isVisible ? 'visible':'hidden'}>
        <TextContainer>
          <Title>Crie sua conta</Title>
          <Subtitle>Preencha os campos abaixo para se cadastrar:</Subtitle>
        </TextContainer>
        <LoginContainer>
          <Form>
            <Inputs.LabelInput
              inputType='text'
              labelText='Nome:'
              placeholder='Informe o seu nome'
              require={true}
            />
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
            <Inputs.LabelInput
              inputType='password'
              labelText='Confirmar senha:'
              placeholder='Confirme a sua senha'
              require={true}
            />
            <Buttons.ButtonTheme
              type='submit'
              backgroundTheme='primary'
              backgroundCustomColor='#fff'
              outlined={true}
              textColorTheme='primary'
            >
              Cadastrar
            </Buttons.ButtonTheme>
          </Form>
        </LoginContainer>
        <LinkNewAccount>
          Já tem cadastro? <Link to='/login'>Entrar a com minha conta</Link>
        </LinkNewAccount>
      </Container>
    </Containers.Main>
  );
}

export default Signin;