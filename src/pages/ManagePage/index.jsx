/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import { MainContainer } from '../../components/atom';
import { Header, Logo } from '../../components/mocules';
import SwitchBtn from './SwitchBtn';

export default function Page() {
  return (
    <>
      <MainContainer>
        <Header except="all" />
        <Logo
          width="20%"
          height="15%"
          minWidth="400px"
          minHeight="150px"
          marginTop="120px"
        />
        <SwitchBtn />
      </MainContainer>
    </>
  );
}
