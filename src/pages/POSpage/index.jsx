/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { MainContainer, Container } from '../../components/atom';
import { Header } from '../../components/mocules';
import PaymentWindow from './PaymentWindow';
import Menus from './Menus';

const SubContainer = styled(Container)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Box = styled.div`
  background-color: blue;
  width: 35%;
  height: 500px;
`;

export default function POSPage() {
  return (
    <MainContainer>
      <Header top="0px" right="0px" />
      <SubContainer>
        <PaymentWindow>asd</PaymentWindow>
        <Menus>asd</Menus>
      </SubContainer>
      <SubContainer>
        <Box>asd</Box>
      </SubContainer>
    </MainContainer>
  );
}