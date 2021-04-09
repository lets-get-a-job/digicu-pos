/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from '../atom';

const MenuContainer = styled(Container)`
  width: 19%;
  height: 50vh;
  min-wdith: 150px;
  min-height: auto;
  margin: 0px;
  padding: 0px;
  border-top: 2px solid rgba(0, 32, 96, 0.7);
  border-bottom: 2px solid rgba(0, 32, 96, 0.7);
`;

const MenuText = styled(Link)`
  width: 95%;
  heigth: auto;
  font-size: 18px;
  color: #002060;
  font-weight: bold;
  margin: 18px 0px 0px 0px;
  padding-bottom: 18px;
  text-align: center;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  border-bottom: 1px solid rgba(0, 32, 96, 0.4);
`;

export default function MenuBar({ menus }) {
  return (
    <MenuContainer>
      {menus.map((v, i) => (
        <MenuText key={i} to={v.path}>
          {v.text}
        </MenuText>
      ))}
    </MenuContainer>
  );
}

MenuBar.propType = {
  menus: PropTypes.array.isRequired,
};
