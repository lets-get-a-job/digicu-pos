import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Container, Button, MainContainer } from '../../components/atom';
import { CheckBox, Logo } from '../../components/mocules';
import Data from './cpi.json';

const SubContainer = styled(Container)`
  width: 1200px;
  align-items: flex-end;
  padding: 0px;
`;

export default function CPIPage() {
  const [check, setCheck] = useState(false);
  const history = useHistory();

  const handleOnNextBtn = () => {
    // eslint-disable-next-line no-unused-expressions
    // eslint-disable-next-line
    check
      ? history.push('/signup')
      : alert('개인정보수집이용을 동의하여야합니다.');
  };

  return (
    <>
      <MainContainer>
        <Logo
          width="20%"
          height="15%"
          minWidth="400px"
          minHeight="150px"
          marginTop="120px"
        />
        <textarea
          style={{
            width: '1200px',
            height: '450px',
            backgroundColor: 'white',
            resize: 'none',
            fontSize: '24px',
            overflow: 'scroll',
            textAlign: 'center',
            verticalAlign: 'center',
          }}
          value={Data.text}
          readOnly
        />
        <SubContainer>
          <div style={{ margin: '20px 0px' }}>
            <CheckBox text="동의합니다." check={check} setCheck={setCheck} />
          </div>
          <Button onClick={handleOnNextBtn}>다음</Button>
        </SubContainer>
      </MainContainer>
    </>
  );
}
