import React from 'react';
import { MainContainer, LogoImg } from '../../components/atom';
import { Header } from '../../components/mocules';
import SwitchBtn from './SwitchBtn';

export default function Page() {
  return (
    <>
      <Header />
      <MainContainer>
        <LogoImg
          style={{
            width: '20%',
            height: '15%',
            minWidth: '400px',
            minHeight: '150px',
            marginTop: '120px',
          }}
        />
        <SwitchBtn />
      </MainContainer>
    </>
  );
}
