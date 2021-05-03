import { useContext } from 'react';
import axios from 'axios';
import { reverse, sortBy } from 'lodash';
import GitContext from './context';
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  SORT_BY,
  SET_USER,
  TOGGLE_VIEW,
} from './types';

const sortByProperty = (obj, param) => reverse(sortBy(obj, [param]));

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
        payload: sortByProperty(data, ['stargazers_count']),
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
      type: SORT_BY,
      payload: sortByProperty(profile, ['name']),
    });

  const sortByStars = (profile) =>
    dispatch({
      type: SORT_BY,
      payload: sortByProperty(profile, ['stargazers_count']),
    });

  const setUser = (user) => dispatch({ type: SET_USER, payload: user });

  const toggleView = (isCard) =>
    dispatch({ type: TOGGLE_VIEW, payload: !isCard });

  return {
    ...state,
    fetchProfile,
    sortByName,
    sortByStars,
    setUser,
    toggleView,
  };
};
