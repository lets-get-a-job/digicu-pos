import styled from 'styled-components';

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
`;

const Tr = styled.tr``;

const Th = styled.th`
  width: 30%;
  border: 1px solid #cccccc;
`;

const Td = styled.td`
  border: 1px solid #cccccc;
  text-align: right;
  padding-right: 5px;
`;

export { Table, Tr, Th, Td };
