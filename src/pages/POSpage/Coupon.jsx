/* eslint-disable react/jsx-indent */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Container, Text } from '../../components/atom';
import { InquiryCoupon } from '../../repo/coupon';
import UseUser from '../../hook/useUser';

const CouponContainer = styled(Container)`
  flex-direction: row;
  width: 100%;
  height: 20vh;
  min-height: 180px;
  padding: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  overflow: scroll;
`;

const CouponBtn = styled(Button)`
  width: 200px;
  min-width: 200px;
  height: 12vh;
  min-height: 120px;
  padding: 0px;
  justify-content: center;
  margin: 20px;
  border-radius: 5px;
  background: rgba(128, 128, 128, 0.2);
  box-shadow: 0px 0px 4px 3px rgba(128, 128, 128, 0.7);
`;

export default function Coupon() {
  const [user, setUser] = UseUser();
  const [coupon, setCoupon] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus('PENDING');
    InquiryCoupon(user.token, user.companyInfo.email).then(d => {
      setCoupon(d.data);
      setStatus('SUCCESS');
    });
  }, [user]);

  return (
    <CouponContainer>
      {status === 'SUCCESS'
        ? coupon.map(v => (
            <CouponBtn key={v.id}>
              <Text>{v.name}</Text>
            </CouponBtn>
          ))
        : '...로딩중'}
    </CouponContainer>
  );
}
