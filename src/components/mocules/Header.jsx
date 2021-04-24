/* eslint-disable no-unused-vars */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Div } from '../atom';
import useUser from '../../hook/useUser';

const HeaderContainer = styled(Div)`
  width: auto;
  height: auto;
  position: absolute;
  top: 30px;
  right: 20vw;
  flex-direction: row;
`;

const LogoutBtn = styled(Div)`
  width: auto;
  height: auto;
  padding: 2px 10px;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background-color:  rgba(0, 0, 0, 0.3);
  }
`

export default function Header() {

  const history = useHistory();
  const [user, setUser] = useUser();

  return <HeaderContainer>헤더입니다.
    <LogoutBtn onClick={() => {
      localStorage.removeItem('user');
      window.location.reload();
  }}>로그아웃</LogoutBtn>
  </HeaderContainer>;
}
