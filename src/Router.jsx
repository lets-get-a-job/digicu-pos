/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import useUser from './hook/useUser';
import {
  LogInPage,
  CPIPage,
  SignUpPage,
  ManagePage,
  CuponPage,
  ProductPage,
  SalePage,
  POSPage,
} from './pages';

const Router = () => {
  const pages = [
    { path: '/manage', component: ManagePage, exact: true },
    { path: '/cupon', component: CuponPage, exact: false },
    { path: '/product', component: ProductPage, exact: false },
    { path: '/sale', component: SalePage, exact: true },
    { path: '/pos', component: POSPage, exact: true },
  ];
  return (
    <BrowserRouter>
      <Route path="/" exact component={LogInPage} />
      <Route path="/cpi" exact component={CPIPage} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/postmp" exact component={POSPage} />
      {pages.map((v, i) => {
        return (
          <AuthorityRouter
            key={v.path}
            path={v.path}
            exact={v.exact}
            component={v.component}
          />
        );
      })}
    </BrowserRouter>
  );
};

function AuthorityRouter({ component, ...rest }) {
  const [user, setUser] = useUser();

  return <Route {...rest} component={user ? component : LogInPage} />;
}

AuthorityRouter.propTypes = {
  component: PropTypes.func.isRequired,
};

export default React.memo(Router);
