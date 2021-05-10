/* eslint-disable no-unused-vars */
import axios from 'axios';
import { defaultHeaders } from './_axios';

export async function RegistMenu(AccessToken, payload) {
  if (!payload) throw new Error('payload ERROR!');
  console.log(payload);
  const req = await axios.post(
    '/menu',
    { ...payload },
    {
      headers: {
        ...defaultHeaders,
        Authorization: AccessToken,
      },
    },
  );

  return req;
}

export const a = 1;
