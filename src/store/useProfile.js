import { useContext } from 'react';
import axios from 'axios';
import GitContext from './context';
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  SORT_BY_NAME,
  SORT_BY_STARS,
  SET_USER,
} from './types';

export const useProfile = () => {
  const context = useContext(GitContext);
  if (!context) {
    throw new Error(`useProfile must be used within a GitProvider`);
  }
  const [state, dispatch] = context;

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

  return { ...state, fetchProfile, sortByName, sortByStars, setUser };
};
