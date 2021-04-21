/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import {
  Text,
  Container,
  Table,
  Tr,
  Th,
  Td,
  Button,
} from '../../../components/atom';
import useUser from '../../../hook/useUser';
import { DeleteCoupon } from '../../../repo/coupon';

const CurCouContainer = styled(Container)`
  padding-top: 10px;
  max-height: 1400px;
  overflow: scroll;
`;

export default function CurrentCoupon() {
  const [user, setUser] = useUser();
  const onClick = () => {
    DeleteCoupon(user.token, 3);
  };
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
      <Button onClick={onClick}>버튼</Button>
    </CurCouContainer>
  );
}
