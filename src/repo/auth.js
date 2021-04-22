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
  const req = await axios.post(
    '/authentication/login',
    { ...payload },
    {
      headers: {
        ...defaultHeaders,
      },
    },
  );
  return req;
};
