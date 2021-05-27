/* eslint-disable react/forbid-prop-types */
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
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
  TableBtn,
} from '../../components/atom';
import PaymentContext from '../../context/paymentContext';
import { deleteList, clearList } from './store';
import { RegistPayment } from '../../repo/payment';
import { date } from '../../date';
import time from '../../time';
import useUser from '../../hook/useUser';
import { JoinSocket, GetSocket, PushSocekt } from './socket';

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

function PaymentWindow({ state, dispatch }) {
  const [user, setUser] = useUser();
  const payment = useContext(PaymentContext);

  useEffect(() => {
    JoinSocket(user.companyInfo.company_number);
  }, []);

  const onClick = () => {
    if (window.confirm('결제하시겠습니까?')) {
      console.log(state);
      const paymentItems = [];
      for (const i of state.menus) {
        paymentItems.push({
          menu_id: i.menuId,
          payment_count: i.count,
          payment_value: i.price,
        });
      }
      console.log(paymentItems);
      const payload = {
        payment_info: {
          sale: state.sale,
          sum: state.sum,
          total: state.total,
          payment_time: `${date(new Date())} ${time()}`,
        },
        payment_items: paymentItems,
      };
      console.log(payload);
      RegistPayment(user.token, payload, user.companyInfo.company_number);
      dispatch(clearList());
    }
  };

  const qrClicked = () => {
    PushSocekt('qr');
  };

  return (
    <MainContainer>
      <TableContainer>
        <Table>
          <Thead>
            <Tr bgc="rgba(128, 128, 128, 0.2)">
              <Th>#</Th>
              <Th>메뉴</Th>
              <Th>가격</Th>
              <Th>수량</Th>
              <Th width="15%" />
            </Tr>
          </Thead>
          <Tbody>
            {state.menus.map((v, i) => (
              <Tr key={v.name + v.price}>
                <Td>{i + 1}</Td>
                <Td>{v.name}</Td>
                <Td>{v.price}</Td>
                <Td>{v.count}</Td>
                <Td>
                  <TableBtn
                    onClick={() => {
                      dispatch(
                        deleteList({ id: i, price: v.price, count: v.count }),
                      );
                    }}
                  >
                    삭제
                  </TableBtn>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <PaymentContainer>
        <PayBtn onClick={onClick}>결제하기</PayBtn>
        <PayBtn onClick={qrClicked}>쿠폰받기</PayBtn>
        <TextContainer>
          <TextSubContainer>
            <Text>총 금액 : </Text>
            <Text>{state.sum}</Text>
          </TextSubContainer>
          <TextSubContainer>
            <Text>할인 금액 : </Text>
            <Text>{state.sale}</Text>
          </TextSubContainer>
          <TextSubContainer>
            <Text>합계 : </Text>
            <Text>{state.total}</Text>
          </TextSubContainer>
        </TextContainer>
      </PaymentContainer>
    </MainContainer>
  );
}

PaymentWindow.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentWindow);
