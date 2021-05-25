/* eslint-disable no-unused-vars */
/* eslint-disable no-global-assign */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LogoURL from '../../assets/DIGICU.png';

const LogoImg = styled.div`
  width: ${props => (props.width ? props.width : '200px')};
  height: ${props => (props.height ? props.height : '200px')};
  min-width: ${props => (props.minWidth ? props.minWidth : '200px')};
  min-height: ${props => (props.minHeight ? props.minHeight : '200px')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
  background-image: url(${LogoURL});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export default function Logo({
  width,
  height,
  minWidth,
  minHeight,
  marginTop,
}) {
  const history = useHistory();

  return (
    <LogoImg
      width={width}
      height={height}
      minWidth={minWidth}
      minHeight={minHeight}
      marginTop={marginTop}
      onClick={() => {
        history.push('/');
      }}
    />
  );
}

Logo.defaultProps = {
  width: '200px',
  height: '200px',
  minWidth: '200px',
  minHeight: '200px',
  marginTop: '0px',
};

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  marginTop: PropTypes.string,
};
