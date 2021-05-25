/* eslint-disable no-nested-ternary */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
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
  TableBtn,
} from '../../../components/atom';
import { Modal } from '../../../components/mocules';
import { InquiryMenu } from '../../../repo/menu';
import useUser from '../../../hook/useUser';
import Detail from './Modal/MenuDetail';
import { date } from '../../../date';

const CurCouContainer = styled(Container)`
  padding-top: 10px;
  max-height: 1400px;
  overflow: scroll;
`;

export default function CurrentProduct() {
  const [user, setUser] = useUser();
  const [status, setStatus] = useState('PENDING');
  const [myMenus, setMyMenus] = useState([]);

  const [modal, setModal] = useState(false);
  const [detail, setDetail] = useState({
    menu_id: -1,
    company_number: parseInt(user.companyInfo.company_number),
    menu_name: '',
    menu_value: -1,
    stock: -1,
    regi_date: '',
  });
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    if (isChange) {
      console.log(status);
      setModal(false);
      setStatus('PENDING');
      InquiryMenu(user.token, user.companyInfo.company_number).then(d => {
        setMyMenus(d.data);
        console.log(d.data);
      });
      setStatus('SUCCESS');
      setIsChange(false);
    }
  }, [isChange]);

  const detailBtnClicked = (id, name, value, stock) => {
    setModal(!modal);
    setDetail({
      ...detail,
      menu_id: id,
      menu_name: name,
      menu_value: value,
      stock,
    });
  };

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
            <Th width="20%">#</Th>
            <Th width="30%">메뉴 이름</Th>
            <Th width="30%"> 가격</Th>
            <Th width="20%" />
          </Tr>
        </Thead>
        <Tbody>
          {status === 'SUCCESS' ? (
            myMenus === null ? (
              <Tr>
                <Td>현재 등록 메뉴가 없습니다.</Td>
              </Tr>
            ) : (
              myMenus.map((v, i) => (
                <Tr key={v.menu_id}>
                  <Td>{i + 1}</Td>
                  <Td>{v.menu_name}</Td>
                  <Td>{v.menu_value}</Td>
                  <Td>
                    <TableBtn
                      onClick={() =>
                        detailBtnClicked(
                          v.menu_id,
                          v.menu_name,
                          v.menu_value,
                          v.stock,
                        )
                      }
                    >
                      자세히보기
                    </TableBtn>
                  </Td>
                </Tr>
              ))
            )
          ) : (
            <Tr>
              <Td>...로딩중</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      <Modal
        visible={modal}
        onCloseBtnClicked={() => {
          setModal(!modal);
        }}
      >
        <Detail menu={detail} setMenu={setDetail} setIsChange={setIsChange} />
      </Modal>
    </CurCouContainer>
  );
}
