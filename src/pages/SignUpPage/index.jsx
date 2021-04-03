/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { MainContainer, LogoImg, Div } from '../../components/atom';
import PersonInfo from './PersonInfo';
import CompanyInfo from './CompanyInfo';

const SignUpContainer = styled(Div)`
  flex-direction: row;
  width: 70%;
  height: auto;
  min-width: 800px;
  max-width: 1200px;
  margin-top: 20px;
  padding: 0px;
  border-radius: 15px;
  background-color: #002060;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

const SignUpBox = styled(Div)`
  width: 65%;
  height: auto;
  border-radius: 15px;
  margin: 0px;
  background-color: white;
  padding: 50px 30px;
`;

export default function SignupPage() {
  const [curState, setCurState] = useState('PersonInfo');
  const [regData, setRegData] = useState({});

  return (
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
      <SignUpContainer>
        <SignUpBox>
          {curState === 'PersonInfo' ? (
            <PersonInfo
              setRegData={setRegData}
              setCurState={setCurState}
              regData={regData}
            />
          ) : (
            <CompanyInfo
              setRegData={setRegData}
              setCurState={setCurState}
              regData={regData}
            />
          )}
        </SignUpBox>
      </SignUpContainer>
    </MainContainer>
  );
}
