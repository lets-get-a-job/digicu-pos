/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
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
} from '../../components/atom';

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
  border-radius: 5px;
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
            {detailList.items.map((v, i) => (
              <Tr>
                <Td>{i + 1}</Td>
                <Td>{v.menu_id}</Td>
                <Td>{v.payment_value}</Td>
                <Td>{v.payment_count}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </PartialContainer>
  );
}

PartialSale.propTypes = {
  detailList: PropTypes.any.isRequired,
};
