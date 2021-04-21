/* eslint-disable no-unused-vars */
import axios from 'axios';
import { defaultHeaders } from './_axios';

export function RegistCoupon(accessToken, payload) {
  if (!payload) throw new Error('payload ERROR!');
  const req = axios.post(
    '/coupon/coupon_spec',
    { ...payload },
    {
      headers: { ...defaultHeaders, Authorization: accessToken },
    },
  );
}

export function InquiryCoupon(accessToken, payload) {
  if (!payload) throw new Error('payload ERROR!');
}

export function DeleteCoupon(accessToken, id) {
  if (!id) throw new Error('id ERROR!');
  const req = axios.delete(`/coupon/coupon_spec/${id}`, {
    headers: { ...defaultHeaders, Authorization: accessToken },
  });

  return req;
}

export const a = 1;
