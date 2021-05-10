/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Form, Button } from '../../../components/atom';
import { InputBox } from '../../../components/mocules';
import { RegistMenu } from '../../../repo/menu';
import useUser from '../../../hook/useUser';

const FormContainer = styled(Container)`
  margin: 0px;
  padding: 0px;
`;
const Panel = () => {
  const [user, setUser] = useUser();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const onClick = () => {
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = date.getMonth() + 1;
    let monthS;
    if (month < 10) monthS = `0${month.toString()}`;
    else monthS = month.toString();
    const day = date.getDate();
    let dayS;
    if (day < 10) dayS = `0${day.toString()}`;
    else dayS = day.toString();
    const cur = `${year}-${monthS}-${dayS}`;
    RegistMenu(user.token, {
      company_number: parseInt('1234561234'),
      menu_name: name,
      menu_value: parseInt(price),
      stock: parseInt(stock),
      regi_date: cur,
    })
      .then(d => console.log(d))
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
        <InputBox
          label="재고"
          type="text"
          width="250px"
          value={stock}
          onChange={e => setStock(e.target.value.replace(/[^0-9]/g, ''))}
        />
        <Button type="button" style={{ marginTop: '50px' }} onClick={onClick}>
          등록하기
        </Button>
      </Form>
    </FormContainer>
  );
};

export default React.memo(Panel);
