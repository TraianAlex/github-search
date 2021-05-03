import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  SORT_BY,
  SET_USER,
  TOGGLE_VIEW,
} from './types';

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
        profile: payload,
      };
    case SORT_BY:
      return {
        ...state,
        loading: false,
        profile: payload,
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
