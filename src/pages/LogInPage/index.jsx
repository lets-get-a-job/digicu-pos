/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Div, MainContainer, Text, Button } from '../../components/atom';
import { InputBox, CheckBox, Logo } from '../../components/mocules';
import { SignIn } from '../../repo/auth';
import useUser from '../../hook/useUser';

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
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');

  const history = useHistory();
  const [check, setCheck] = useState(false);

  const [user, setUser] = useUser();

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPWChange = e => {
    setPW(e.target.value);
  };

  const onBtnClick = () => {
    if (email === '' || pw === '') {
      alert('email과 password를 입력하세요');
    } else {
      const payload = { email, plain_password: pw };
      SignIn(payload)
        .then(d => {
          const cur = +new Date() + d.data.expires_in;
          setUser({
            companyInfo: d.data.companyInfo,
            token: d.data.token,
            expireIn: cur,
          });
          if (check) {
            if (localStorage.getItem('email')) localStorage.removeItem('email');
            localStorage.setItem('email', d.data.companyInfo.email);
          }
        })
        .catch(error => {
          if (error.response.status === 401) {
            alert('email인증이 완료되지 않은 계정입니다.');
          } else if (error.response.status === 403) {
            alert('email 혹은 password가 틀립니다.');
          }
        });
    }
  };

  useEffect(() => {
    if (user) {
      history.push('/manage');
    }
  }, [user]);

  useEffect(() => {
    const save = localStorage.getItem('email');
    if (save) setEmail(save);
  }, []);

  useEffect(() => {
    console.log(check);
  }, [check]);

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
            <InputBox
              label="E-MAIL"
              type="email"
              width="250px"
              value={email}
              onChange={onEmailChange}
            />
            <InputBox
              label="PASSWORD"
              type="password"
              width="250px"
              value={pw}
              onChange={onPWChange}
            />
            <div style={{ margin: '30px 0px 45px 0px', width: '100%' }}>
              <CheckBox text="Remember me?" check={check} setCheck={setCheck} />
            </div>
            <Button onClick={onBtnClick}>로그인</Button>
            <SignInBtn onClick={() => history.push('/cpi')}>회원가입</SignInBtn>
          </LogInBox>
        </LogInContainer>
      </MainContainer>
    </>
  );
}
