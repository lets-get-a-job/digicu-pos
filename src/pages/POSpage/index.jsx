/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MainContainer, Container } from '../../components/atom';
import { Header } from '../../components/mocules';
import PaymentWindow from './PaymentWindow';
import Menus from './Menus';
import Coupon from './Coupon';

const SubContainer = styled(Container)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export default function POSPage() {
  const [msg, setMSG] = useState({});
  const [couponID, setCouponID] = useState();
  return (
    <MainContainer>
      <Header top="0px" right="0px" except="pos" />
      <SubContainer>
        <PaymentWindow msg={msg} setMSG={setMSG} />
        <Menus />
      </SubContainer>
      <SubContainer>
        <Coupon msg={msg} setCouponID={setCouponID} />
      </SubContainer>
    </MainContainer>
  );
}
