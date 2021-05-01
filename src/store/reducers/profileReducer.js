import { reverse, sortBy } from 'lodash';
import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  SORT_BY_NAME,
  SORT_BY_STARS,
  SET_USER,
  TOGGLE_VIEW,
} from '../actions/types';

const initialState = {
  user: '',
  loading: false,
  profile: [],
  error: '',
  isCard: true,
};

const sortByProperty = (obj, param) => reverse(sortBy(obj, [param]));

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        profile: [],
        error: '',
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
        loading: false,
        profile: sortByProperty(action.payload, ['name']),
      };
    case SORT_BY_STARS:
      return {
        ...state,
        loading: false,
        profile: sortByProperty(action.payload, ['stargazers_count']),
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        profile: [],
        error: action.payload
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