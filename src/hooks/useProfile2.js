// @ts-nocheck
import { useReducer } from 'react';
import axios from 'axios';
import { sortBy, reverse } from 'lodash';

const FETCH_PROFILE = 'FETCH_PROFILE';
const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';
const SORT_BY_NAME = 'SORT_BY_NAME';
const SORT_BY_STARS = 'SORT_BY_STARS';
const SET_USER = 'SET_USER';
const TOGGLE_VIEW = 'TOGGLE_VIEW';

const sortByProperty = (obj, param) => reverse(sortBy(obj, [param]));

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
        profile: sortByProperty(action.payload, ['stargazers_count']),
      };
    case SORT_BY_NAME:
      return {
        ...state,
        profile: sortByProperty(action.payload, ['name']),
      };
    case SORT_BY_STARS:
      return {
        ...state,
        profile: sortByProperty(action.payload, ['stargazers_count']),
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

export const useProfile = () => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const { user, profile, loading, error, isCard } = state;

  const fetchProfile = async (user) => {
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
