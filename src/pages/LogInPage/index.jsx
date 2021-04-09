import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  LogoImg,
  Div,
  MainContainer,
  Text,
  Button,
} from '../../components/atom';
import { InputBox, CheckBox } from '../../components/mocules';

const LogInContainer = styled(Div)`
  flex-direction: row;
  width: 40%;
  height: 25%;
  min-width: 800px;
  min-height: 500px;
  padding: 0px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

const InfoBox = styled(Div)`
  width: 45%;
  height: 500px;
  background-color: #002060;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  margin: 0px;
  align-items: flex-start;
  padding: 40px 50px;
  color: white;
  font-size: 30px;
  line-height: 40px;
  text-align: left;
  background: linear-gradient(225deg, #406bc2, #002060 70%);
`;

const LogInBox = styled(Div)`
  justify-content: center;
  width: 55%;
  height: 500px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  margin: 0px;
  background-color: white;
  padding: 0px 12%;
`;

const SignInBtn = styled(Text)`
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;
`;

export default function LogInPage() {
  const history = useHistory();
  const [check, setCheck] = useState(false);

  return (
    <>
      <MainContainer>
        <LogoImg
          style={{
            width: '20%',
            height: '15%',
            minWidth: '400px',
            minHeight: '150px',
            marginTop: '120px',
          }}
        />
        <LogInContainer>
          <InfoBox>
            <p style={{ color: 'white', fontSize: '50px', lineHeight: '70px' }}>
              To use our
            </p>
            <p style={{ color: 'white', fontSize: '40px', lineHeight: '60px' }}>
              Web POS,
            </p>
            <p style={{ color: 'white', fontSize: '30px', lineHeight: '50px' }}>
              Login here.
            </p>
          </InfoBox>
          <LogInBox className="login box">
            <InputBox label="E-MAIL" type="email" width="250px" />
            <InputBox label="PASSWORD" type="password" width="250px" />
            <div style={{ margin: '30px 0px 45px 0px', width: '100%' }}>
              <CheckBox text="Remember me?" check={check} setCheck={setCheck} />
            </div>
            <Button>로그인</Button>
            <SignInBtn onClick={() => history.push('/cpi')}>회원가입</SignInBtn>
          </LogInBox>
        </LogInContainer>
      </MainContainer>
    </>
  );
}
