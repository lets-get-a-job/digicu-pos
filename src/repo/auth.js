/* eslint-disable no-unused-vars */
import axios from 'axios';
import { defaultHeaders } from './_axios';

export const SignUp = async payload => {
  if (!payload) throw new Error('payload ERROR!');
  const req = await axios
    .post(
      '/users/company',
      { ...payload },
      {
        headers: {
          ...defaultHeaders,
        },
      },
    )
    .then(data => console.log(data))
    .catch(e => console.log(e));

  return req;
};

export const SignIn = async payload => {
  if (!payload) throw new Error('payload ERROR!');
  const req = await axios
    .post(
      '/authentication/login',
      { ...payload },
      {
        headers: {
          ...defaultHeaders,
        },
      },
    )
    .catch(error => {
      if (error.response.status === 401) {
        alert('email인증이 완료되지 않은 계정입니다.');
      } else if (error.response.status === 403) {
        alert('email 혹은 password가 틀립니다.');
      }
    });
  return req;
};
