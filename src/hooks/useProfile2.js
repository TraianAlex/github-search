// @ts-nocheck
import { useReducer } from 'react';
import axios from 'axios';
import { sortBy, reverse } from 'lodash';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_STARS = 'SORT_BY_STARS';
export const SET_USER = 'SET_USER';

const sortByProperty = (obj, param) => reverse(sortBy(obj, [param]));

const initialState = {
  profile: [],
  loading: false,
  error: '',
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        loading: true,
        profile: [],
        error: '',
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: sortByProperty(action.payload, ['stargazers_count']),
      };
    case SORT_BY_NAME:
      return {
        profile: sortByProperty(action.payload, ['name']),
      };
    case SORT_BY_STARS:
      return {
        profile: sortByProperty(action.payload, ['stargazers_count']),
      };
    case FETCH_PROFILE_FAILURE:
      return {
        loading: false,
        profile: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useProfile = () => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const { profile, loading, error } = state;

  const handleSubmit = async (user) => {
    dispatch({ type: FETCH_PROFILE, payload: true });
    try {
      const { data } = await axios.get(
        `https://api.github.com/orgs/${user}/repos`,
      );
      dispatch({ type: FETCH_PROFILE_SUCCESS, payload: data });
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
    dispatch({ type: SORT_BY_NAME, payload: profile });
  const sortByStars = (profile) =>
    dispatch({ type: SORT_BY_STARS, payload: profile });

  return { profile, error, loading, handleSubmit, sortByName, sortByStars };
};
