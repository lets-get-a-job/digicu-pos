/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Form, Button } from '../../../components/atom';
import { InputBox } from '../../../components/mocules';
import { RegistCoupon } from '../../../repo/coupon';
import useUser from '../../../hook/useUser';

const FormContainer = styled(Container)`
  margin: 0px;
  padding: 0px;
`;
// 주인, 쿠폰이름, 값, 생성일, 타입, 유효기간
const Panel = () => {
  const [user, setUset] = useUser();
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [goal, setGoal] = useState('');
  const [type, setType] = useState('DISCOUNT');
  const [period, setPeriod] = useState('');

  const onSubmit = () => {
    const iValue = parseInt(value);
    const payload = {
      name,
      value: parseInt(value),
      goal: parseInt(goal),
      type,
      period: parseInt(period),
    };
    RegistCoupon(user.token, payload);
    setName('');
    setValue('');
    setGoal('');
    setPeriod('');
    alert('쿠폰이 성공적으로 등록되었습니다.');
  };

  useEffect(() => {
    console.log('새 쿠폰 등록 페이지');
  }, []);
  return (
    <FormContainer>
      <Form style={{ width: '100%', alignItems: 'center' }}>
        <InputBox
          label="쿠폰 이름"
          type="text"
          width="250px"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <InputBox
          label="가격"
          type="text"
          width="250px"
          value={value}
          onChange={e => setValue(e.target.value.replace(/[^0-9]/g, ''))}
        />
        <InputBox
          label="필요수량"
          type="text"
          width="250px"
          value={goal}
          onChange={e => setGoal(e.target.value.replace(/[^0-9]/g, ''))}
        />
        <select
          style={{ marginTop: '20px' }}
          value={type}
          onChange={() => console.log('s')}
        >
          <option value="fixed">고정금액할인</option>
          <option value="percent">퍼센트할인</option>
          <option value="DISCOUNT">할인</option>
        </select>
        <InputBox
          label="기간"
          type="number"
          width="250px"
          value={period}
          onChange={e => setPeriod(e.target.value)}
        />
        <Button type="button" onClick={onSubmit} style={{ marginTop: '20px' }}>
          등록하기
        </Button>
      </Form>
    </FormContainer>
  );
};

export default React.memo(Panel);
