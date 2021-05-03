// @ts-nocheck
import { useReducer } from 'react';
import axios from 'axios';
import { sortBy, reverse } from 'lodash';

const FETCH_PROFILE = 'FETCH_PROFILE';
const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';
const SORT_BY = 'SORT_BY';
const SET_USER = 'SET_USER';
const TOGGLE_VIEW = 'TOGGLE_VIEW';

const initialState = {
  user: '',
  profile: [],
  loading: false,
  error: '',
  isCard: true,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case FETCH_PROFILE:
      return {
        ...state,
        user: '',
        loading: true,
        profile: [],
        error: '',
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case SORT_BY:
      return {
        ...state,
        profile: action.payload,
      };
    case FETCH_PROFILE_FAILURE:
      return {
        user: '',
        loading: false,
        profile: [],
        error: action.payload,
      };
    case TOGGLE_VIEW:
      return {
        ...state,
        isCard: action.payload,
      };
    default:
      return state;
  }
};

const sortByProperty = (obj, param) => reverse(sortBy(obj, [param]));

export const useProfile = () => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const { user, profile, loading, error, isCard } = state;

  const fetchProfile = async (user) => {
    dispatch({ type: FETCH_PROFILE, payload: true });
    try {
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
    dispatch({ type: SORT_BY, payload: sortByProperty(profile, ['name']) });

  const sortByStars = (profile) =>
    dispatch({
      type: SORT_BY,
      payload: sortByProperty(profile, ['stargazers_count']),
    });

  const setUser = (user) => dispatch({ type: SET_USER, payload: user });

  const toggleView = (isCard) =>
    dispatch({ type: TOGGLE_VIEW, payload: !isCard });

  return {
    user,
    profile,
    error,
    loading,
    isCard,
    setUser,
    fetchProfile,
    sortByName,
    sortByStars,
    toggleView,
  };
};
