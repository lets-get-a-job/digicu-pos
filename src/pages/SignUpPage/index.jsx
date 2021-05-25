/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { MainContainer, Container } from '../../components/atom';
import { Logo } from '../../components/mocules';
import PersonInfo from './PersonInfo';
import CompanyInfo from './CompanyInfo';

const SignUpContainer = styled(Container)`
  flex-direction: row;
  width: 70vw;
  min-width: 800px;
  max-width: 1200px;
  margin-top: 20px;
  padding: 0px;
  border-radius: 15px;
  background-color: #002060;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  overflow: auto;
`;

const SignUpBox = styled(Container)`
  width: 65%;
  margin: 0px;
  background-color: white;
  padding: 50px 30px;
`;

export default function SignupPage() {
  const [curState, setCurState] = useState('PersonInfo');
  const [regData, setRegData] = useState({});

  return (
    <MainContainer>
      <Logo
        width="20%"
        height="15%"
        minWidth="400px"
        minHeight="150px"
        marginTop="120px"
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
