/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Form, Button } from '../../../components/atom';
import { InputBox } from '../../../components/mocules';

const FormContainer = styled(Container)`
  margin: 0px;
  padding: 0px;
`;
const Panel = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

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
        <Button style={{ marginTop: '50px' }}>등록하기</Button>
      </Form>
    </FormContainer>
  );
};

export default React.memo(Panel);
