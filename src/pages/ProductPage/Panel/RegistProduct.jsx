/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Form, Button } from '../../../components/atom';
import { InputBox } from '../../../components/mocules';
import { RegistMenu } from '../../../repo/menu';
import useUser from '../../../hook/useUser';
import date from '../../../date';

const FormContainer = styled(Container)`
  margin: 0px;
  padding: 0px;
`;
const Panel = () => {
  const [user, setUser] = useUser();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const onClick = () => {
    RegistMenu(user.token, {
      company_number: user.companyInfo.company_number,
      menu_name: name,
      menu_value: parseInt(price),
      regi_date: date(new Date()),
    })
      .then(() => {
        alert('성공적으로 등록되었습니다');
        setName('');
        setPrice('');
      })
      .catch(e => console.error(e));
  };

  return (
    <FormContainer>
      <Form style={{ width: '100%', alignItems: 'center' }}>
        <InputBox
          label="음식 이름"
          type="text"
          width="250px"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <InputBox
          label="가격"
          type="text"
          width="250px"
          value={price}
          onChange={e => setPrice(e.target.value.replace(/[^0-9]/g, ''))}
        />

        <Button type="button" style={{ marginTop: '50px' }} onClick={onClick}>
          등록하기
        </Button>
      </Form>
    </FormContainer>
  );
};

export default React.memo(Panel);
