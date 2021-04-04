/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/atom';
import { ImgBtn } from '../../components/mocules';
import SALES from '../../assets/SALES.png';

const BtnContiner = styled(Container)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export default function SwitchBtn() {
  const manageBtn = [
    { path: '/', img: '', text: 'POS' },
    { path: '/', img: '', text: 'SALES' },
    { path: '/', img: '', text: 'PRODUCTS' },
    { path: '/', img: '', text: 'CUPON' },
  ];
  return (
    <BtnContiner>
      {manageBtn.map((v, i) => (
        <ImgBtn
          key={i}
          path={v.path}
          url={v.img}
          width="20vw"
          height="20vw"
          boxShadow="1vw 1vw 1vw rgba(0, 0, 0, 0.4)"
          text={v.text}
        />
      ))}
    </BtnContiner>
  );
}
