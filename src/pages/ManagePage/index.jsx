import React from 'react';
import { MainContainer, LogoImg } from '../../components/atom';

export default function Page() {
  return (
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
      관리 페이지 입니다.
    </MainContainer>
  );
}
