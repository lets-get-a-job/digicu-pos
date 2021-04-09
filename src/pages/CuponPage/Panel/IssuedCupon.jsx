import React from 'react';
import styled from 'styled-components';
import { Text, Container, Table, Tr, Th, Td } from '../../../components/atom';

const TableContainer = styled(Container)`
  padding-top: 10px;
  max-height: 1400px;
  overflow: scroll;
`;

const Panel = () => (
  <TableContainer>
    <Text
      style={{ fontWeight: 'bold', fontSize: '1.8vw', marginBottom: '10px' }}
    >
      발급 쿠폰 내역
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
  </TableContainer>
);

export default React.memo(Panel);
