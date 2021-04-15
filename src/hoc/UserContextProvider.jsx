/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import UserContext from '../context/userContext';

export default function UserContextProvider({ children }) {
  const initialUser = () => {
    const tempUser = JSON.parse(localStorage.getItem('auth'));
    if (!tempUser) {
      return null;
    }
    const tempDate = +new Date();
    if (tempUser.expireIn < tempDate) {
      localStorage.removeItem('auth');
      return null;
    }
    return tempUser;
  };

  const [user, setUser] = useState(initialUser);

  const set = useCallback(data => {
    setUser(data);
    localStorage.setItem('auth', JSON.stringify(data));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser: set }}>
      {children}
    </UserContext.Provider>
  );
}
