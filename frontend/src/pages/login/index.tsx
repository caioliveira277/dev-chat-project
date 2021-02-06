import React, { 
  useEffect, 
  useState, 
  ChangeEventHandler, 
  FormEventHandler,
  useContext
} from 'react';
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
import { Auth, IAuthEntries } from 'adapters/login';
import { Session } from 'contexts';

const Login: React.FC = () => {
  const history = useHistory();
  const { setSession } = useContext(Session.Context);
  const [userEntries, setUserEntries] = useState<IAuthEntries>({} as IAuthEntries);
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
    const auth = new Auth(userEntries);
    
    auth.getAccess()
      .then(({data}) => {
        Auth.saveToken(data.token);
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
          <Title>Acesse sua conta</Title>
          <Subtitle>Acesse selecionando uma das opções abaixo:</Subtitle>
        </TextContainer>
        <LoginContainer>
          <Form onSubmit={handlerSubmit}>
            <Inputs.LabelInput
              type='email'
              labelText='Email:'
              placeholder='Informe o seu email'
              autoCompleted='email'
              require={true}
              name='email'
              value={userEntries.email || ''}
              onChange={handlerChange}
            />
            <Inputs.LabelInput
              type='password'
              labelText='Senha:'
              placeholder='Informe a sua senha'
              require={true}
              name='password'
              value={userEntries.password || ''}
              onChange={handlerChange}
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