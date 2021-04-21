/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import UserContext from '../context/userContext';
import { MakeAccessToken } from '../repo/_axios';

export default function UserContextProvider({ children }) {
  const initialUser = () => {
    const tempUser = JSON.parse(localStorage.getItem('user'));
    if (!tempUser) {
      return null;
    }
    const tempDate = +new Date();
    console.log(tempDate);
    console.log(tempUser.expireIn);
    if (tempUser.expireIn < tempDate) {
      localStorage.removeItem('user');
      return null;
    }
    return tempUser;
  };

  const [user, setUser] = useState(initialUser);

  const set = useCallback(data => {
    setUser({ ...data, token: MakeAccessToken(data.token) });
    localStorage.setItem(
      'user',
      JSON.stringify({ ...data, token: MakeAccessToken(data.token) }),
    );
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser: set }}>
      {children}
    </UserContext.Provider>
  );
}
