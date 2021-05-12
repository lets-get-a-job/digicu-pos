/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Input, Text } from '../../../components/atom';
import {
  FindCoupon,
  IssueCoupon,
  AccumulateCoupon,
} from '../../../repo/coupon';
import useUser from '../../../hook/useUser';

export default function Issue({ id, name }) {
  const [phone, setPhone] = useState('');
  const [user, setUser] = useUser();

  const onClick = () => {
    console.log(id);
    let phoneNumber;
    if (phone.length === 11) {
      phoneNumber = `${phone.substr(0, 3)}-${phone.substr(3, 4)}-${phone.substr(
        7,
        4,
      )}`;
      FindCoupon(user.token, phoneNumber).then(d => {
        const idx = d.data.findIndex(
          element =>
            element.issuer === user.companyInfo.email && element.name === name,
        );
        if (idx === -1) {
          const payload = {
            count: 1,
            coupon_spec_id: id,
            subject_phone: phoneNumber,
          };
          IssueCoupon(user.token, payload).then(data => console.log(data.data));
        } else {
          AccumulateCoupon(user.token, d.data[idx].id, { num_acc: 1 });
        }
      });
    } else alert('전화번호를 입력해주세요');
  };

  return (
    <Container style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          marginBottom: '30px',
        }}
      >
        <Text>전화번호</Text>
        <Input
          value={phone}
          onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
          borderBottom="1px solid black"
        />
      </div>
      <Button onClick={onClick}>적립하기</Button>
    </Container>
  );
}

Issue.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
