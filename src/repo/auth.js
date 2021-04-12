/* eslint-disable no-unused-vars */
import axios from 'axios';
import { defaultHeaders } from './_axios';

export const SignUp = async payload => {
  console.log(payload);
  /* fetch('/users/company', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }); */
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
  console.log(payload);
};
