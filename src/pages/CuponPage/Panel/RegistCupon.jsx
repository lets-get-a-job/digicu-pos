/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Form, Button } from '../../../components/atom';
import { InputBox } from '../../../components/mocules';

const FormContainer = styled(Container)`
  margin: 0px;
  padding: 0px;
`;
// 주인, 쿠폰이름, 값, 생성일, 타입, 유효기간
const Panel = () => {
  const [type, setType] = useState('fixed');
  useEffect(() => {
    console.log('새 쿠폰 등록 페이지');
  }, []);
  return (
    <FormContainer>
      <Form style={{ width: '100%', alignItems: 'center' }}>
        <InputBox label="쿠폰 이름" type="text" width="250px" />
        <InputBox label="값" type="number" width="250px" />
        <InputBox label="필요수량" type="number" width="250px" />
        <select style={{ marginTop: '20px' }}>
          <option value="fixed">고정금액할인</option>
          <option value="percent">퍼센트할인</option>
        </select>
        <Button style={{ marginTop: '20px' }}>등록하기</Button>
      </Form>
    </FormContainer>
  );
};

export default React.memo(Panel);
