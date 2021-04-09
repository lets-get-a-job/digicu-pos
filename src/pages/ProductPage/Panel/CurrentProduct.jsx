/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Text, Container, Table, Tr, Th, Td } from '../../../components/atom';

const CurCuContainer = styled(Container)`
  padding-top: 10px;
  max-height: 1400px;
  overflow: scroll;
`;

export default function CurrentProduct() {
  return (
    <CurCuContainer>
      <Text
        style={{ fontWeight: 'bold', fontSize: '1.8vw', marginBottom: '10px' }}
      >
        현재 등록 음식
      </Text>
      <Table>
        <thead>
          <Tr>
            <Th>#</Th>
            <Th>메뉴 이름</Th>
            <Th>가격</Th>
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
    </CurCuContainer>
  );
}
