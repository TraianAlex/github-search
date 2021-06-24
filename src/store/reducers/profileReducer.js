import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  SORT_BY,
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

export const profileReducer = (state = initialState, action) => {
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
        ...state,
        loading: false,
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
export const getProfileState = (state) => state.profile;
