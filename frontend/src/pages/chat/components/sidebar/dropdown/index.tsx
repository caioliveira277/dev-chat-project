import React, { useContext, MouseEventHandler, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Container,
  Title,
  Link,
  LinkLoggout,
  Mask,
  IDropdown
} from './styles';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { Session } from 'contexts';
import { Auth } from 'adapters/login';

const Dropdown: React.FC<IDropdown> = ({show, emitClose}) => {
  const { setSession } = useContext(Session.Context);
  const [ showDropdown, setShowDropdown ] = useState<boolean>(show);

  useEffect(() => {
    setShowDropdown(show);
  }, [show]);

  const handlerLoggout: MouseEventHandler = (event): void => {
    event.preventDefault();
    Auth.removeToken();
    setSession(Session.initialState);
  }

  const handlerMask = (): void => {
    setShowDropdown(false);
    emitClose(false);
  }

  return(
    <>
      {createPortal(
        <Mask onClick={handlerMask} show={showDropdown} />,
        document.body
      )}
      <Container animate={showDropdown ? 'visible':'hidden'}>
          <Title>Alterar Status</Title>
          <Link href='#' statusColor='#82E2A7'>Online</Link>
          <Link href='#' statusColor='#FFD15C'>Ausente</Link>
          <Link href='#' statusColor='#FF7879'>Ocupado</Link>
          <LinkLoggout href='#' onClick={handlerLoggout}>
            <BsArrowReturnLeft size="18px" />
            <p>Sair</p>
          </LinkLoggout>
      </Container>
    </>
  );
}

export default Dropdown;