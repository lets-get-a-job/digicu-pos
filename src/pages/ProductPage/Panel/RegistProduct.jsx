/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Form, Button } from '../../../components/atom';
import { InputBox } from '../../../components/mocules';

const FormContainer = styled(Container)`
  margin: 0px;
  padding: 0px;
`;
const Panel = () => (
  <FormContainer>
    <Form style={{ width: '100%', alignItems: 'center' }}>
      <InputBox label="음식 이름" type="text" width="250px" />
      <InputBox label="값" type="number" width="250px" />
      <Button style={{ marginTop: '50px' }}>등록하기</Button>
    </Form>
  </FormContainer>
);

export default React.memo(Panel);
