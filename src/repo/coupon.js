/* eslint-disable no-unused-vars */
import axios from 'axios';
import { defaultHeaders } from './_axios';

export async function RegistCoupon(accessToken, payload) {
  if (!payload) throw new Error('payload ERROR!');
  const req = await axios.post(
    '/coupon/coupon_spec',
    { ...payload },
    {
      headers: { ...defaultHeaders, Authorization: accessToken },
    },
  );
}

export const InquiryCoupon = async (accessToken, email) => {
  if (!email) throw new Error('payload ERROR!');
  const req = await axios.get(`/coupon/coupon_spec?email=${email}`, {
    headers: { ...defaultHeaders, Authorization: accessToken },
  });
  return req;
};

export async function DeleteCoupon(accessToken, id) {
  if (!id) throw new Error('id ERROR!');
  const req = await axios.delete(`/coupon/coupon_spec/${id}`, {
    headers: { ...defaultHeaders, Authorization: accessToken },
  });

  return req;
}
