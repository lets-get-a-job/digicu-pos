import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../atom';

const NavConatinaer = styled(Container)`
  width: 100vw;
  height: 70px;
  background-color: #dbdbdb;
  margin-top: 60px;
  padding: 0px 20vw;
  flex-direction: row;
`;

const Nav = styled.div`
  width: 15vw;
  height: auto;
`;
const NavText = styled.div`
  width: auto;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export default function NavBar() {
  const history = useHistory();

  const nav = [
    { text: 'POS', path: '/pos' },
    { text: 'SALES', path: '/sale' },
    { text: 'PRODUCTS', path: '/product/currentproduct' },
    { text: 'CUPON', path: '/cupon/currentcupon' },
  ];
  return (
    <>
      <NavConatinaer>
        {nav.map((v, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Nav key={i}>
            <NavText
              onClick={() => {
                history.push(v.path);
              }}
            >
              {v.text}
            </NavText>
          </Nav>
        ))}
      </NavConatinaer>
    </>
  );
}
