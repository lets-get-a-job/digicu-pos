/* eslint-disable no-unused-vars */
import axios from 'axios';
import { defaultHeaders } from './_axios';

export async function RegistMenu(AccessToken, payload) {
  if (!payload) throw new Error('payload ERROR!');
  console.log(payload);
  const req = await axios.post(
    '/pos/menu',
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

export async function InquiryMenu(AccessToken) {
  const req = await axios.get('/pos/menu', {
    headers: { ...defaultHeaders, Authorization: AccessToken },
  });

  return req;
}

export async function DeleteMenu(AccessToken, id) {
  const req = await axios.delete(`/pos/menu/${id}`, {
    headers: { ...defaultHeaders, Authorization: AccessToken },
  });
}

export async function ModifyMenu(AccessToken, payload) {
  const req = await axios.patch(
    '/pos/menu',
    { ...payload },
    {
      headers: {
        ...defaultHeaders,
        Authorization: AccessToken,
      },
    },
  );
}

export const a = 1;
