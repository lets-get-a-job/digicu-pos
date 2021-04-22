/* eslint-disable no-unused-vars */
import axios from 'axios';

export const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const MakeAccessToken = token => `Bearer ${token}`;

function init() {
  axios.defaults.headers = defaultHeaders;
  axios.defaults.baseURL =
    'http://ec2-3-34-127-177.ap-northeast-2.compute.amazonaws.com:5555';
}

export default init;
