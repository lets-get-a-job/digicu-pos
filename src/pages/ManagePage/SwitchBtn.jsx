/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/atom';
import { ImgBtn } from '../../components/mocules';
import POS from '../../assets/POS.png';
import SALE from '../../assets/SALE.png';
import MENU from '../../assets/MENU.png';
import COUPON from '../../assets/COUPON.png';

const BtnContiner = styled(Container)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export default function SwitchBtn() {
  const manageBtn = [
    { path: '/', img: POS, text: 'POS' },
    { path: '/sale', img: SALE, text: 'SALES' },
    { path: '/product/currentproduct', img: MENU, text: 'PRODUCTS' },
    { path: '/cupon/currentcupon', img: COUPON, text: 'COUPON' },
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
