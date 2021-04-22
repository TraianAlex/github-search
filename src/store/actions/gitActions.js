import axios from "axios";
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  SORT_BY_NAME,
  SORT_BY_STARS,
} from "./types";

export const fetchProfile = (user) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PROFILE });
    const { data } = await axios.get(`https://api.github.com/orgs/${user}/repos`);
    dispatch({
        type: FETCH_PROFILE_SUCCESS,
        payload: data,
    });
  } catch(error) {
      dispatch({
        type: FETCH_PROFILE_FAILURE,
        error,
      });
    };
};

export const sortByName = (profile) => ({
  type: SORT_BY_NAME,
  payload: profile,
});

export const sortByStars = (profile) => ({
  type: SORT_BY_STARS,
  payload: profile,
});
