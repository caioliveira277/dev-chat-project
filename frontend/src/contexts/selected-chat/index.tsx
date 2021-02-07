import React, { createContext, useState } from 'react';
import { IGroupResponse } from 'axios';

interface ISelectedChatContext extends IGroupResponse {
  setSelectedChat: (parms: Omit<ISelectedChatContext, 'setSelectedChat'>) => void;
}

const initialState = {} as ISelectedChatContext;

export const Context = createContext<ISelectedChatContext>(initialState);

export const Provider: React.FC = ({children}) => {
  const [selectedContext, setSelectedContext] = useState<Omit<ISelectedChatContext, 'setSelectedChat'>>(initialState);

  const setSelectedChat: ISelectedChatContext['setSelectedChat'] = (parms) => {
    setSelectedContext(parms);
  }

  return (
    <Context.Provider value={{...selectedContext, setSelectedChat}}>
      {children}
    </Context.Provider>
  );
}