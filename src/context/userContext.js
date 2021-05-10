/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { createContext } from 'react';

const UserContext = createContext({
  user: {
    companyInfo: null,
    token: null,
    expireIn: null,
  },
  setUser: null,
});

export default UserContext;
