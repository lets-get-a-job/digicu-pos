/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Container, Text, Table, Tr, Th, Td } from '../../components/atom';
import { TableBox } from '../../components/mocules';

const PartialContainer = styled(Container)`
  width: 34%;
  min-width: 400px;
  height: 90vh;
  min-height: 600px;
  background-color: #d8e2f3;
  padding: 10px;
  box-shadow: 0.1vw 0.1vw 0.5vw 0.2vw rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;

const TableContainer = styled(Container)`
  width: 100%;
  height: 85vh;
  min-height: 580px;
  background-color: white;
  margin: 0px;
  padding: 10px;
`;

export default function PartialSale() {
  return (
    <PartialContainer>
      <TableContainer>
        <TableBox list={[]} />
      </TableContainer>
    </PartialContainer>
  );
}
