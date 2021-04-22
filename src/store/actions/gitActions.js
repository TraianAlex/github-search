import axios from 'axios';
import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  SORT_BY_NAME,
  SORT_BY_STARS,
  SET_USER,
} from './types';

export const fetchProfile = (user) => async (dispatch) => {
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

export const sortByName = (profile) => ({
  type: SORT_BY_NAME,
  payload: profile,
});

export const sortByStars = (profile) => ({
  type: SORT_BY_STARS,
  payload: profile,
});

export const setUser = (user) => ({ type: SET_USER, payload: user });
