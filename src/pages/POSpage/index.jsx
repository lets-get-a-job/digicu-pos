/* eslint-disable no-unused-vars */
import React from 'react';
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
  return (
    <MainContainer>
      <Header top="0px" right="0px" />
      <SubContainer>
        <PaymentWindow />
        <Menus />
      </SubContainer>
      <SubContainer>
        <Coupon />
      </SubContainer>
    </MainContainer>
  );
}
