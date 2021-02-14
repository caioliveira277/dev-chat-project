import React, { createContext, useState } from 'react';
import { IUserResponse } from 'axios';

interface ISessionContext extends IUserResponse {
  authenticated?: boolean;
  setSession: (parms: Omit<ISessionContext, 'setSession'>) => void;
}

export const initialState = {} as ISessionContext;

export const Context = createContext<ISessionContext>(initialState);

export const Provider: React.FC = ({children}) => {
  const [sessionContext, setSessionContext] = useState<Omit<ISessionContext, 'setSession'>>(initialState);

  const setSession: ISessionContext['setSession'] = (parms) => {
    setSessionContext(parms);
  }

  return (
    <Context.Provider value={{...sessionContext, setSession}}>
      {children}
    </Context.Provider>
  );
}