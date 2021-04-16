/* eslint-disable no-unused-vars */
import axios from 'axios';
import { defaultHeaders } from './_axios';

export function RegistCoupon(accessToken, payload) {
  if (!payload) throw new Error('payload ERROR!');
  console.log(payload);
  console.log(accessToken);
  const Token = `Bearer ${accessToken}`;
  console.log(Token);

  const req = axios
    .post(
      '/coupon/coupon_spec',
      { ...payload },
      {
        headers: { ...defaultHeaders, Authorization: Token },
      },
    )
    .then(d => console.log(d));
}

export const a = 1;
