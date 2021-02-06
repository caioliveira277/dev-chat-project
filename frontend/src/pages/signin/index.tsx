import React, { useEffect, useState, ChangeEventHandler, FormEventHandler, useContext } from 'react';
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
import { Link, useHistory } from 'react-router-dom';
import { SigninAdapter, ISigninEntries } from 'adapters/signin';
import { Session } from 'contexts';

const Signin: React.FC = () => {
  const history = useHistory();
  const { setSession } = useContext(Session.Context);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [userEntries, setUserEntries] = useState<ISigninEntries>({} as ISigninEntries);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlerChange: ChangeEventHandler<HTMLInputElement> = ({target}) => {
    setUserEntries({
      ...userEntries,
      [target.name]: target.value
    });
  };

  const handlerSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const sign = new SigninAdapter(userEntries);
    
    sign.register()
      .then(({data}) => {
        SigninAdapter.saveToken(data.token);
        setSession(data);
        history.push('/chat');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <Containers.Main backgroundTheme='contrast' centralized={true}>
      <Container animate={isVisible ? 'visible':'hidden'}>
        <TextContainer>
          <Title>Crie sua conta</Title>
          <Subtitle>Preencha os campos abaixo para se cadastrar:</Subtitle>
        </TextContainer>
        <LoginContainer>
          <Form onSubmit={handlerSubmit}>
            <Inputs.LabelInput
              type='text'
              labelText='Nome:'
              placeholder='Informe o seu nome'
              require={true}
              value={userEntries.name || ''}
              onChange={handlerChange}
              name='name'
            />
            <Inputs.LabelInput
              type='email'
              labelText='Email:'
              placeholder='Informe o seu email'
              autoCompleted='email'
              require={true}
              value={userEntries.email || ''}
              onChange={handlerChange}
              name='email'
            />
            <Inputs.LabelInput
              type='password'
              labelText='Senha:'
              placeholder='Informe a sua senha'
              require={true}
              value={userEntries.password || ''}
              onChange={handlerChange}
              name='password'
            />
            <Inputs.LabelInput
              type='password'
              labelText='Confirmar senha:'
              placeholder='Confirme a sua senha'
              require={true}
              value={userEntries.password_confirmation || ''}
              onChange={handlerChange}
              name='password_confirmation'
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