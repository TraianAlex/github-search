import { reverse, sortBy } from 'lodash';
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  SORT_BY_NAME,
  SORT_BY_STARS,
  SET_USER,
} from '../actions/types';

const initialState = {
  user: '',
  loading: false,
  profile: [],
  error: '',
};

const sortByProperty = (obj, param) => reverse(sortBy(obj, [param]));

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case FETCH_PROFILE:
      return {
        user: '',
        loading: true,
        profile: [],
        error: '',
      };
    case FETCH_PROFILE_SUCCESS:
      return {
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
        error: action.payload,
      };
    default:
      return state;
  }
};
