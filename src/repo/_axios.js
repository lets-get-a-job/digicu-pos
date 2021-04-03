/* eslint-disable no-unused-vars */
import axios from 'axios';

export const defaultHeaders = {
  'Content-Type': 'application/json',
};

function init() {
  axios.defaults.headers = defaultHeaders;
  axios.defaults.baseURL = 'http://localhost:8080';
}

export default init;
