/* eslint-disable react/jsx-indent */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Text,
  Container,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
} from '../../../components/atom';
import { InquiryMenu } from '../../../repo/menu';
import useUser from '../../../hook/useUser';

const CurCouContainer = styled(Container)`
  padding-top: 10px;
  max-height: 1400px;
  overflow: scroll;
`;

export default function CurrentProduct() {
  const [user, setUser] = useUser();
  const [status, setStatue] = useState('PENDING');
  const [myMenus, setMyMenus] = useState([]);

  useEffect(() => {
    InquiryMenu(user.token).then(d => {
      d.data.map(v => {
        setMyMenus([]);
        console.log(v);
        if (v.company_number === user.companyInfo.company_number)
          setMyMenus([...myMenus, { ...v }]);
        return null;
      });
      setStatue('SUCCESS');
    });
  }, []);
  return (
    <CurCouContainer>
      <Text
        style={{ fontWeight: 'bold', fontSize: '1.8vw', marginBottom: '10px' }}
      >
        현재 등록 음식
      </Text>
      <Table>
        <Thead>
          <Tr bgc="rgba(128, 128, 128, 0.2)">
            <Th>#</Th>
            <Th>메뉴 이름</Th>
            <Th>가격</Th>
          </Tr>
        </Thead>
        <Tbody>
          {status === 'PENDUNG'
            ? '...로딩중'
            : myMenus.map((v, i) => (
                <Tr key={v.menu_id}>
                  <Td>{i + 1}</Td>
                  <Td>{v.menu_name}</Td>
                  <Td>{v.menu_value}</Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </CurCouContainer>
  );
}
