/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import {
  Text,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from '../../components/atom';
import PaymentContext from '../../context/paymentContext';

const MainContainer = styled(Container)`
  padding: 0px;
  width: 63%;
  min-width: 800px;
  height: 55vh;
  min-height: 600px;
  justify-content: space-between;
  over-flow: scroll;
`;

const TableContainer = styled(Container)`
  margin: 0px;
  width: 100%;
  height: 40vh;
  min-height: 390px;
  padding: 2px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

const PaymentContainer = styled(Container)`
  flex-direction: row-reverse;
  width: 100%;
  height: 15vh;
  min-height: 150px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

const PayBtn = styled(Button)`
  width: 180px;
  height: 10vh;
  min-height: 100px;
  background: rgba(128, 128, 128, 0.2);
  color: #002060;
  box-shadow: 0px 0px 4px 3px rgba(128, 128, 128, 0.7);
  margin-left: 20px;
`;

const TextContainer = styled(Container)`
  padding: 10px;
  height: 14vh;
  min-height: 140px;
  justify-content: space-around;
`;

const TextSubContainer = styled(Container)`
  padding: 0px;
  width: 200px;
  flex-direction: row;
  justify-content: space-between;
`;

export default function PaymentWindow() {
  const payment = useContext(PaymentContext);

  useEffect(() => {
    payment.total = 10000;
    payment.sale = 2000;
    payment.pay = 8000;
  }, [payment]);

  return (
    <MainContainer>
      <TableContainer>
        <Table>
          <Thead>
            <Tr bgc="rgba(128, 128, 128, 0.2)">
              <Th>#</Th>
              <Th>메뉴</Th>
              <Th>가격</Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
      <PaymentContainer>
        <PayBtn>결제하기</PayBtn>
        <TextContainer>
          <TextSubContainer>
            <Text>총 금액 : </Text>
            <Text>{payment.total}</Text>
          </TextSubContainer>
          <TextSubContainer>
            <Text>할인 금액 : </Text>
            <Text>{payment.sale}</Text>
          </TextSubContainer>
          <TextSubContainer>
            <Text>합계 : </Text>
            <Text>{payment.pay}</Text>
          </TextSubContainer>
        </TextContainer>
      </PaymentContainer>
    </MainContainer>
  );
}
