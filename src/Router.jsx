import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { LogInPage } from './pages';

const Router = () => {
  const pages = [
    {
      mode: 'route',
      paths: [{ path: '/', component: LogInPage }],
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
