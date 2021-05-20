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

  return 'asd';
}
