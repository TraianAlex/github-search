// @ts-nocheck
import React, { useReducer } from 'react';
import axios from 'axios';
import GitContext from './context';
import { profileReducer } from './profileReducer';
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  SORT_BY_NAME,
  SORT_BY_STARS,
  SET_USER,
} from './types';

export const GitProvider = ({ children }) => {
  const initialState = {
    user: '',
    loading: false,
    profile: [],
    error: '',
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const fetchProfile = async (user) => {
    try {
      dispatch({ type: FETCH_PROFILE });
      const { data } = await axios.get(
        `https://api.github.com/orgs/${user}/repos`,
      );
      dispatch({
        type: FETCH_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PROFILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  const sortByName = (profile) =>
    dispatch({
      type: SORT_BY_NAME,
      payload: profile,
    });

  const sortByStars = (profile) =>
    dispatch({
      type: SORT_BY_STARS,
      payload: profile,
    });

  const setUser = (user) => dispatch({ type: SET_USER, payload: user });

  return (
    <GitContext.Provider
      value={{ ...state, fetchProfile, sortByName, sortByStars, setUser }}
    >
      {children}
    </GitContext.Provider>
  );
};
