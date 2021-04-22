import { reverse, sortBy } from "lodash";
import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  SORT_BY_NAME,
  SORT_BY_STARS,
} from "../actions/types";

const initialState = {
  user: "",
  loading: false,
  profile: [],
};

const sortByProperty = (obj, param) => reverse(sortBy(obj, [param]));

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        loading: true,
        profile: [],
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: sortByProperty(action.payload, ["stargazers_count"]),
      };
    case SORT_BY_NAME:
      return {
        ...state,
        loading: false,
        profile: sortByProperty(action.payload, ["name"]),
      };
    case SORT_BY_STARS:
      return {
        ...state,
        loading: false,
        profile: sortByProperty(action.payload, ["stargazers_count"]),
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        profile: action.error,
      };
    default:
      return state;
  }
};
