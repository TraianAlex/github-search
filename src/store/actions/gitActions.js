import axios from "axios";
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILURE,
  SORT_BY_NAME,
  SORT_BY_STARS,
} from "./types";

export const fetchProfile = (user) => (dispatch) => {
  axios
    .get(`https://api.github.com/orgs/${user}/repos`)
    .then((profile) =>
      dispatch({
        type: FETCH_PROFILE,
        payload: profile.data,
      })
    )
    .catch((error) => {
      dispatch({
        type: FETCH_PROFILE_FAILURE,
        error,
      });
    });
};

export const sortByName = (profile) => ({
  type: SORT_BY_NAME,
  payload: profile,
});

export const sortByStars = (profile) => ({
  type: SORT_BY_STARS,
  payload: profile,
});