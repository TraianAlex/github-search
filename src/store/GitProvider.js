import React, { useReducer, useMemo } from 'react';
import GitContext from './context';
import { profileReducer } from './profileReducer';

export const GitProvider = ({ children }) => {
  const initialState = {
    user: '',
    loading: false,
    profile: [],
    error: '',
    isCard: true,
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const value = useMemo(() => [state, dispatch], [state]);

  return <GitContext.Provider value={value}>{children}</GitContext.Provider>;
};
