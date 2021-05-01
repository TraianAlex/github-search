import { reverse, sortBy } from 'lodash';
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  SORT_BY_NAME,
  SORT_BY_STARS,
  SET_USER,
  TOGGLE_VIEW,
} from './types';

const sortByProperty = (obj, param) => reverse(sortBy(obj, [param]));

export const profileReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
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
        profile: sortByProperty(payload, ['stargazers_count']),
      };
    case SORT_BY_NAME:
      return {
        ...state,
        loading: false,
        profile: sortByProperty(payload, ['name']),
      };
    case SORT_BY_STARS:
      return {
        ...state,
        loading: false,
        profile: sortByProperty(payload, ['stargazers_count']),
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        profile: [],
        error: payload,
      };
    case TOGGLE_VIEW:
      return {
        ...state,
        isCard: payload,
      };
    default:
      return state;
  }
};
