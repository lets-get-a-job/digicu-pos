/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Text,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from '../../../components/atom';
import useUser from '../../../hook/useUser';
import { InquiryCoupon } from '../../../repo/coupon';
import { Modal } from '../../../components/mocules';
import Detail from './Modal/CouponDetail';

const CurCouContainer = styled(Container)`
  padding: 10px 10px;
  max-height: 1400px;
  overflow: scroll;
`;

const DetailBtn = styled(Button)`
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: red;
  font-size: 14px;
  :hover {
  }
`;

export default function CurrentCoupon() {
  const [user, setUser] = useUser();
  const [coupon, setCoupon] = useState();
  const [status, setStatus] = useState('PENDING');
  const [modal, setModal] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [couponId, setCouponId] = useState(0);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    setStatus('PENDING');
    InquiryCoupon(user.token, user.companyInfo.email).then(d => {
      console.log('불러오는중');
      setCoupon(d.data);
      setStatus('SUCCESS');
      setIsChange(false);
    });
  }, [isChange]);

  return (
    <CurCouContainer>
      <Text
        style={{ fontWeight: 'bold', fontSize: '1.8vw', marginBottom: '10px' }}
      >
        현재 등록 쿠폰
      </Text>
      <Table>
        <Thead>
          <Tr bgc="rgba(128, 128, 128, 0.2)">
            <Th width="10%">#</Th>
            <Th width="30%">쿠폰 내용</Th>
            <Th width="20%">가치</Th>
            <Th width="20%">타입</Th>
            <Th width="20%" />
          </Tr>
        </Thead>
        <Tbody>
          {status === 'SUCCESS' ? (
            coupon.map((v, i) => (
              // eslint-disable-next-line react/jsx-indent
              <Tr key={i}>
                <Td>{i + 1}</Td>
                <Td>{v.name}</Td>
                <Td>{v.value}</Td>
                <Td>{v.type}</Td>
                <Td style={{ textAlign: 'center' }}>
                  <DetailBtn
                    onClick={() => {
                      setModal(true);
                      setCouponId(v.id);
                    }}
                  >
                    자세히보기
                  </DetailBtn>
                </Td>
              </Tr>
            ))
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
          setModal(false);
          setIsClose(true);
        }}
      >
        <Detail
          isClose={isClose}
          setIsClose={setIsClose}
          couponId={couponId}
          setCouponId={setCouponId}
          setModal={setModal}
          setIsChange={setIsChange}
        />
      </Modal>
    </CurCouContainer>
  );
}
