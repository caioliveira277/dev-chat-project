import React, { useContext, useState, ChangeEventHandler, FormEventHandler, useEffect } from 'react';
import {
  Container,
  Title,
  Form,
  RoundedImageProfile,
  FigureContainer,
  ButtonEditImage
} from './styles';
import { 
  Inputs,
  Buttons
} from 'components';
import { Session } from 'contexts';
import { MdModeEdit } from 'react-icons/md';
import { IUpdateUser } from 'adapters/chat/user';
import { toast } from 'react-toastify';
import socket from 'adapters/ws';

const Settings: React.FC = () => {
  const {
    id,
    name, 
    profile_status,
    profile_image,
    setSession
  } = useContext(Session.Context);
  const [ updateParms, setUpdateParms ] = useState<IUpdateUser>({
    name,
    profile_status,
    profile_image
  } as IUpdateUser); 

  const handlerChange: ChangeEventHandler<HTMLInputElement> = ({target}) => {
    setUpdateParms({
      ...updateParms,
      [target.name]: target.value
    });
  };

  const handlerSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    socket.emit('request-updateUser', {id, ...updateParms});
  }

  useEffect(() => {
    socket.on('receive-updateUser', (data: IUserResponse) => {
      setSession({...data, authenticated: true});
      toast.success('🤘 Perfil atualizado com sucesso!');
    });
  }, []);


  return (
    <>
      <Title>Editar perfil:</Title>
      <Container>
        <Form autoComplete='off' onSubmit={handlerSubmit}>
          <FigureContainer>
            <ButtonEditImage type='button' title='Editar imagem de perfil'>
              <MdModeEdit size='20px' color='currentColor' />
            </ButtonEditImage>
            <RoundedImageProfile
              src={`${process.env.REACT_APP_ASSETS_USERS_PROFILES}/${profile_image || 'profile.png'}`} 
              alt={`Foto de perfil de ${name}`} 
            />
          </FigureContainer>
          <Inputs.LabelInput 
            labelText='Nome:'
            require={true}
            type='text'
            dark={true}
            name='name'
            placeholder='Informe o seu nome'
            value={updateParms.name || ''}
            onChange={handlerChange}
            />
          <Inputs.LabelInput 
            labelText='Status:'
            require={true}
            type='text'
            dark={true}
            name='profile_status'
            placeholder='Como você está?'
            value={updateParms.profile_status || ''}
            onChange={handlerChange}
            />
          <Inputs.LabelInput 
            labelText='Senha:'
            require={false}
            type='password'
            dark={true}
            name='password'
            placeholder='Informe a sua senha'
            onChange={handlerChange}
            />
          <Inputs.LabelInput 
            labelText='Confirmar senha:'
            require={false}
            type='password'
            dark={true}
            name='passwordConfirmation'
            placeholder='Confirme a sua senha'
            onChange={handlerChange}
          />
          <Buttons.ButtonTheme 
            type='submit'
            backgroundTheme='primary'
            textColorTheme='secondary'
          >
            Salvar
          </Buttons.ButtonTheme>
        </Form>
      </Container>
    </>
  );
}

export default Settings;