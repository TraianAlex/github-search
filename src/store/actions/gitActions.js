import axios from 'axios';
import { reverse, sortBy } from 'lodash';
import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  SORT_BY,
  SET_USER,
  TOGGLE_VIEW,
} from './types';

const sortByProperty = (obj, param) => reverse(sortBy(obj, [param]));

export const fetchProfile = (user) => async (dispatch) => {
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

export const sortByName = (profile) => ({
  type: SORT_BY,
  payload: sortByProperty(profile, ['name']),
});

export const sortByStars = (profile) => ({
  type: SORT_BY,
  payload: sortByProperty(profile, ['stargazers_count']),
});

export const setUser = (user) => ({ type: SET_USER, payload: user });

export const toggleView = (isCard) => ({ type: TOGGLE_VIEW, payload: !isCard });
