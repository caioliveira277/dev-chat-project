import React, { createContext, useState } from 'react';
import { IUserResponse } from 'axios';

type SetSessionFunction<T> = (parms: IUserResponse) => T;
interface ISessionContext extends IUserResponse {
  authenticated?: boolean;
  setSession: SetSessionFunction<void>;
}

const initialState = {} as ISessionContext;

export const Context = createContext(initialState);

export const Provider: React.FC = ({children}) => {
  const [sessionContext, setSessionContext] = useState<ISessionContext>(initialState);

  const setSession: SetSessionFunction<void> = (parms) => {
    setSessionContext({
      ...parms, 
      setSession: {} as SetSessionFunction<void>
    });
  }

  return (
    <Context.Provider value={{...sessionContext, setSession}}>
      {children}
    </Context.Provider>
  );
}