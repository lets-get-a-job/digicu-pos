/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  width: 100%;
  height: 100px;
  padding: 10px;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  padding: 10px;
  border: none;
`;

const Th = styled.th`
  width: ${props => props.width};
  height: 30px;
  padding: 10px;
  text-align: left;
  border-top: 2px solid rgba(128, 128, 128, 0.7);
  border-bottom: 2px solid rgba(128, 128, 128, 0.7);
  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
  color: #002060;
`;

const Td = styled.th`
  height: 30px;
  padding: 10px;
  text-align: left;
  padding-right: 5px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
  background-color: ${props => props.bgc};
`;

/*
<Table>
    <Thead>
      <Tr>
        <Th width="10%">asd</Th>
        <Th>asd</Th>
        <Th>asd</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td bgc="rgba(128, 128, 128, 0.2)">dd</Td>
        <Td>dd</Td>
        <Td>dd</Td>
      </Tr>
    </Tbody>
  </Table> */

const TableBox = ({ list }) => (
  <Table>
    {list.map((t, i) => {
      if (t.title === 'head') {
        return (
          <Thead key={i}>
            <Tr>
              {t.content.map((h, hi) => (
                <Th key={hi}>{h.text}</Th>
              ))}
            </Tr>
          </Thead>
        );
      }
      if (t.title === 'body') {
        return (
          <Tbody key={i}>
            {t.contents.map((cs, csi) => {
              if (csi % 2 === 1)
                return (
                  <Tr key={csi}>
                    {cs.content.map((c, ci) => (
                      <Td key={ci}>{c.text}</Td>
                    ))}
                  </Tr>
                );
              return (
                <Tr key={csi}>
                  {cs.content.map((c, ci) => (
                    <Td bgc="rgba(128, 128, 128, 0.2)" key={ci}>
                      {c.text}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        );
      }
      return null;
    })}
  </Table>
);

TableBox.propTypes = {
  list: PropTypes.array.isRequired,
};

export default TableBox;
