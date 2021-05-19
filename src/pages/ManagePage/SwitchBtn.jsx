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
  justify-content: space-around;
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 100px;
`;

export default function SwitchBtn() {
  const manageBtn = [
    { path: '/POS', img: POS, text: 'POS' },
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
          width="10vw"
          height="10vw"
          boxShadow="0px 0px 5px rgba(0, 0, 0, 0.4)"
          text={v.text}
        />
      ))}
    </BtnContiner>
  );
}
