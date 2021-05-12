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
  if (!email) throw new Error('Email ERROR!');
  const req = await axios.get(`/coupon/coupon_spec?email=${email}`, {
    headers: { ...defaultHeaders, Authorization: accessToken },
  });
  return req;
};

export async function DetailCoupon(accessToken, id) {
  if (!id) throw new Error('ID ERROR!');
  const req = await axios.get(`/coupon/coupon_spec/${id}`, {
    headers: { ...defaultHeaders, Authorization: accessToken },
  });
  return req;
}

export async function ModifyCoupon(accessToken, payload, id) {
  if (!payload) throw new Error('payload ERROR!');
  if (!id) throw new Error('ID ERROR!');
  const req = await axios.put(
    `/coupon/coupon_spec/${id}`,
    { ...payload },
    {
      headers: { ...defaultHeaders, Authorization: accessToken },
    },
  );
  return req;
}

export async function DeleteCoupon(accessToken, id) {
  if (!id) throw new Error('ID ERROR!');
  const req = await axios.delete(`/coupon/coupon_spec/${id}`, {
    headers: { ...defaultHeaders, Authorization: accessToken },
  });
  return req;
}

export async function IssueCoupon(accessToken, payload) {
  if (!payload) throw new Error('payload ERROR!');
  const req = await axios.post(
    '/coupon',
    { ...payload },
    { headers: { ...defaultHeaders, Authorization: accessToken } },
  );

  return req;
}

export async function AccumulateCoupon(accessToken, id, payload) {
  console.log(payload);
  const req = await axios.patch(
    `/coupon/accumulate/${id}`,
    { ...payload },
    {
      headers: { ...defaultHeaders, Authorization: accessToken },
    },
  );
  return req;
}

export async function FindCoupon(accessToken, phone) {
  const req = await axios.get(`/coupon/?phone=${phone}&state=normal`, {
    headers: { ...defaultHeaders, Authorization: accessToken },
  });

  return req;
}
