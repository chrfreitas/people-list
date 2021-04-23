import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = {
  get: (endpoint) =>
    axios.get(`${BASE_URL}${endpoint}`).then((response) => response.data),

  filter: (endpoint, options) =>
    axios
      .get(`${BASE_URL}${endpoint}`, {
        params: options.queryParams,
      })
      .then((response) => response.data),
};

export default Object.freeze(api);
