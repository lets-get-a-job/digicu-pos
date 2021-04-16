/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

export default function PanelSwitch({ couponPanels }) {
  return (
    <Switch>
      {couponPanels.map((v, i) => (
        <Route key={i} path={v.path} component={v.component} />
      ))}
    </Switch>
  );
}

PanelSwitch.propTypes = {
  couponPanels: PropTypes.array.isRequired,
};
