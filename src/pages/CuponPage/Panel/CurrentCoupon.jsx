/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Text, Container, Table, Tr, Th, Td } from '../../../components/atom';

const CurCouContainer = styled(Container)`
  padding-top: 10px;
  max-height: 1400px;
  overflow: scroll;
`;

export default function CurrentCoupon() {
  return (
    <CurCouContainer>
      <Text
        style={{ fontWeight: 'bold', fontSize: '1.8vw', marginBottom: '10px' }}
      >
        현재 등록 쿠폰
      </Text>
      <Table>
        <thead>
          <Tr>
            <Th>#</Th>
            <Th>쿠폰 내용</Th>
            <Th>타입</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>d</Td>
            <Td>d</Td>
            <Td>d</Td>
          </Tr>
          <Tr>
            <Td>d</Td>
            <Td>d</Td>
            <Td>d</Td>
          </Tr>
          <Tr>
            <Td>d</Td>
            <Td>d</Td>
            <Td>d</Td>
          </Tr>
        </tbody>
      </Table>
    </CurCouContainer>
  );
}
