/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Container, Text } from '../../components/atom';
import { Modal } from '../../components/mocules';
import {
  InquiryCoupon,
  FindCoupon,
  IssueCoupon,
  AccumulateCoupon,
} from '../../repo/coupon';
import UseUser from '../../hook/useUser';
import { PushSocekt } from './socket';

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

export default function Coupon({ msg, setCouponID }) {
  const [user, setUser] = UseUser();
  const [coupon, setCoupon] = useState();
  const [status, setStatus] = useState();
  const [id, setId] = useState(-1);
  const [name, setName] = useState('');

  useEffect(() => {
    if (msg.type === 'phone') {
      const phone = msg.data.replace(/-/g, '');
      console.log(phone);
      FindCoupon(user.token, phone).then(d => {
        const idx = d.data.findIndex(
          element =>
            element.issuer === user.companyInfo.email && element.name === name,
        );
        if (idx === -1) {
          const payload = {
            count: 1,
            coupon_spec_id: id,
            subject_phone: phone,
          };
          IssueCoupon(user.token, payload).then(data => console.log(data.data));
        } else {
          AccumulateCoupon(user.token, d.data[idx].id, { num_acc: 1 });
        }
      });
    }
  }, [msg]);

  useEffect(() => {
    setStatus('PENDING');
    InquiryCoupon(user.token, user.companyInfo.email).then(d => {
      setCoupon(d.data);
      setStatus('SUCCESS');
    });
  }, [user]);

  const couponClicked = (cId, cName) => {
    setCouponID(id);
    setId(cId);
    setName(cName);
    if (window.confirm('쿠폰을 발급하시겠습니까?')) {
      PushSocekt('phone');
    }
  };

  return (
    <CouponContainer>
      {status === 'SUCCESS'
        ? coupon.map(v => (
            <CouponBtn
              key={v.id}
              onClick={() => {
                couponClicked(v.id, v.name);
              }}
            >
              <Text>{v.name}</Text>
            </CouponBtn>
          ))
        : '...로딩중'}
    </CouponContainer>
  );
}

Coupon.propTypes = {
  msg: PropTypes.any.isRequired,
  setCouponID: PropTypes.func.isRequired,
};
