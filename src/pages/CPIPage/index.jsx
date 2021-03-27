import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { LogoImg, Container, Button } from '../../components/atom';
import { CheckBox } from '../../components/mocules';
import Data from './cpi.json';

const SubContainer = styled(Container)`
  width: 1200px;
  align-items: flex-end;
  padding: 0px;
`;

export default function CPIPage() {
  const [check, setCheck] = useState(false);
  const history = useHistory();

  const handleOnNexyBtn = () => {
    // eslint-disable-next-line no-unused-expressions
    // eslint-disable-next-line
    check ? history.push('/') : alert('개인정보수집이용을 동의하여야합니다.');
  };

  return (
    <>
      <Container
        style={{
          backgroundColor: 'rgba(173, 173, 173, 0.13)',
          height: '100vh',
          padding: '50px auto',
        }}
      >
        <LogoImg
          style={{
            width: '20%',
            height: '15%',
            minWidth: '400px',
            minHeight: '150px',
            marginTop: '120px',
          }}
        />
        <textarea
          style={{
            width: '1200px',
            height: '450px',
            backgroundColor: 'white',
            resize: 'none',
            fontSize: '24px',
            overflow: 'scroll',
          }}
          value={Data.text}
          readOnly
        />
        <SubContainer>
          <div style={{ margin: '20px 0px' }}>
            <CheckBox text="동의합니다." check={check} setCheck={setCheck} />
          </div>
          <Button
            style={{
              background: 'linear-gradient( 135deg, #406bc2, #002060 )',
              color: 'white',
              borderRadius: '5px',
            }}
            onClick={handleOnNexyBtn}
          >
            다음
          </Button>
        </SubContainer>
      </Container>
    </>
  );
}
