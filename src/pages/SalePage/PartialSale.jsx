/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from '../../components/atom';

const PartialContainer = styled(Container)`
  width: 34%;
  min-width: 400px;
  height: 90vh;
  min-height: 600px;
  background-color: #dbdbdb;
  padding: 10px;
  box-shadow: 0.1vw 0.1vw 0.5vw 0.2vw rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;

const TableContainer = styled(Container)`
  width: 100%;
  height: 70vh;
  min-height: 480px;
  background-color: white;
  margin: 0px;
  padding: 10px;
  border-radius: 5px;
  overflow: scroll;
`;

const ToTalContainer = styled(Container)`
  width: 100%;
  height: 15vh;
  min-height: 100px;
  background-color: white;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: flex-start;
`;

export default function PartialSale({ detailList }) {
  useEffect(() => {
    console.log(detailList);
  }, [detailList]);

  return (
    <PartialContainer>
      <TableContainer>
        <Table>
          <Thead>
            <Tr bgc="rgba(128, 128, 128, 0.2)">
              <Th>#</Th>
              <Th>메뉴</Th>
              <Th>가격</Th>
              <Th>개수</Th>
            </Tr>
          </Thead>
          <Tbody>
            {!detailList.items
              ? null
              : detailList.items.map((v, i) => (
                  <Tr key={v.menu_id}>
                    <Td>{i + 1}</Td>
                    <Td>{v.menu_name}</Td>
                    <Td>{v.payment_value}</Td>
                    <Td>{v.payment_count}</Td>
                  </Tr>
                ))}
            {!detailList.sale ? null : detailList.sale !== 0 ? (
              <Tr>
                <Td>#</Td>
                <Td>쿠폰 할인</Td>
                <Td>{detailList.sale}</Td>
                <Td>1</Td>
              </Tr>
            ) : null}
          </Tbody>
        </Table>
      </TableContainer>
      <ToTalContainer>
        <Text style={{ marginBottom: '10px' }}>
          금 액 : {detailList.sum ? detailList.sum : 0} 원
        </Text>
        <Text style={{ marginBottom: '10px' }}>
          할 인 : {detailList.sale ? detailList.sale : 0} 원
        </Text>
        <Text>총 합 : {detailList.total ? detailList.total : 0} 원</Text>
      </ToTalContainer>
    </PartialContainer>
  );
}

PartialSale.propTypes = {
  detailList: PropTypes.any.isRequired,
};
