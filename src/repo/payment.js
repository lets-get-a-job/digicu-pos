/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { defaultHeaders } from './_axios';

export async function RegistPayment(AccessToken, payload, companyNumber) {
  const req = await axios.post(
    `/pos/payment/${companyNumber}`,
    { ...payload },
    {
      headers: { ...defaultHeaders, Authorization: AccessToken },
    },
  );

  return req;
}

export async function InquiryPayment(AccessToken, companyNumber, params) {
  const req = await axios
    .get(`/pos/payment/${companyNumber}`, {
      headers: { ...defaultHeaders, Authorization: AccessToken },
      params: { ...params },
    })
    .then(d => d);

  return req.data;
}
