import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { LogInPage, CPIPage, SignUpPage, ManagePage } from './pages';

const Router = () => {
  const pages = [
    {
      mode: 'route',
      paths: [
        { path: '/', component: LogInPage },
        { path: '/cpi', component: CPIPage },
        { path: '/signup', component: SignUpPage },
        { path: '/manage', component: ManagePage },
      ],
    },
  ];
  return (
    <BrowserRouter>
      {pages.map(v => {
        if (v.mode === 'route') {
          return v.paths.map((data, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Route key={i} path={data.path} exact component={data.component} />
          ));
        }

        return null;
      })}
    </BrowserRouter>
  );
};

export default React.memo(Router);
