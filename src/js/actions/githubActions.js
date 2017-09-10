import axios from 'axios'
import store from "../store"

function fetchGithubDataStart() {
  return {
    type: "GITHUB_DATA_START"
  }
}

function fetchGithubDataReceived(data) {
  return {
    type: "GITHUB_DATA_RECEIVED",
    payload: data
  }
}

function fetchGithubDataError(error) {
  return {
    type: "GITHUB_DATA_ERROR",
    payload: error
  }
}

export function fetchGithub() {
  const githubUrl = 'https://api.github.com/users/spring-projects';
  return function(dispatch) {
    dispatch(fetchGithubDataStart());
    axios.get(githubUrl)
      .then((response) => {
        dispatch(fetchGithubDataReceived(response.data));
      })
      .catch((err) => {
        dispatch(fetchGithubDataError(err));
      })
  }
}
