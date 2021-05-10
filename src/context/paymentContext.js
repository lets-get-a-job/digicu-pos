import { createContext } from 'react';

const PaymentContext = createContext({
  total: null,
  setTotal: null,
  sale: null,
  setSale: null,
  pay: null,
  setPay: null,
});

export default PaymentContext;
