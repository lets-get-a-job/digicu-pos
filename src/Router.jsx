/* eslint-disable react/no-array-index-key */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  LogInPage,
  CPIPage,
  SignUpPage,
  ManagePage,
  CuponPage,
  ProductPage,
  SalePage,
} from './pages';

const Router = () => {
  const pages = [
    {
      mode: 'route',
      paths: [
        { path: '/', component: LogInPage, exact: true },
        { path: '/cpi', component: CPIPage, exact: true },
        { path: '/signup', component: SignUpPage, exact: true },
        { path: '/manage', component: ManagePage, exact: true },
        { path: '/cupon', component: CuponPage, exact: false },
        { path: '/product', component: ProductPage, exact: false },
        { path: '/sale', component: SalePage, exact: true },
      ],
    },
  ];
  return (
    <BrowserRouter>
      {pages.map(v => {
        if (v.mode === 'route') {
          return v.paths.map((data, i) => (
            <Route
              key={i}
              path={data.path}
              exact={data.exact}
              component={data.component}
            />
          ));
        }

        return null;
      })}
    </BrowserRouter>
  );
};

export default React.memo(Router);
