import React from 'react';
import styled from 'styled-components';
import { Div } from '../atom';

const HeaderContainer = styled(Div)`
  width: auto;
  height: auto;
  position: absolute;
  top: 30px;
  right: 20vw;
`;

export default function Header() {
  return <HeaderContainer>헤더입니다.</HeaderContainer>;
}
