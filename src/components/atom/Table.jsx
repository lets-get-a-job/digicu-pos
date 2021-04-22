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
  background-color: ${props => props.bgc};
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
`;

export { Table, Thead, Tbody, Tr, Th, Td };
