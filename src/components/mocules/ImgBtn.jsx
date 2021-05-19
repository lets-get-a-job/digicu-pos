/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../../assets/DIGICU.png';
import { Container, Text } from '../atom';

const ImgContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};

  background-image: url(${props => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  :hover {
    opacity: 0.6;
  }
  cursor: pointer;
  box-shadow: ${props => props.boxShadow};
  border-radius: 1vw;
`;

export default function ImgBtn({ width, height, url, path, boxShadow, text }) {
  const history = useHistory();

  return (
    <Container style={{ paddingTop: '0px' }}>
      <ImgContainer
        onClick={() => history.push(path)}
        width={width}
        height={height}
        url={url}
        boxShadow={boxShadow}
      />
      {text && (
        <Text style={{ marginTop: '30px', fontSize: '1vw' }}>{text}</Text>
      )}
    </Container>
  );
}

ImgBtn.defaultProps = {
  width: '100px',
  height: '100px',
  url: Logo,
  boxShadow: 'none',
  text: '',
};

ImgBtn.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  url: PropTypes.string,
  path: PropTypes.string.isRequired,
  boxShadow: PropTypes.string,
  text: PropTypes.string,
};
