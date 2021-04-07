import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Text, Input, Button, Div } from '../../components/atom';

export const MainText = styled(Text)`
  width: 100%;
  align: left;
  font-size: 32px;
  margin-bottom: 80px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
`;

export const InputContainer = styled(Div)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 50px;
`;

export const Label = styled(Text)``;

export default function PersonInfo({ setRegData, setCurState, regData }) {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [lo, setLO] = useState(false);

  useEffect(() => {
    if (regData.reg_info) {
      setEmail(regData.reg_info.email);
      setPassword(regData.reg_info.plain_password);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = data => {
    console.log(typeof data.letter_ok);
    console.log(data.letter_ok);
    let letter;
    if (typeof data.letter_ok === 'string') {
      if (data.letter_ok === 'true') letter = true;
    } else letter = false;
    if (data.email === '') {
      alert('email을 입력하세요');
    } else if (data.plain_password === '') {
      alert('비밀번호를 입력하세요');
    } else if (data.confirm_password === '') {
      alert('비밀번호를 확인하세요');
    } else if (data.plain_password !== data.confirm_password) {
      alert('비밀번호가 다릅니다.');
    } else {
      console.log('일치합니다');
      setRegData({ reg_info: { ...data, letter_ok: letter } });
      setCurState('CompanyInfo');
    }
  };

  const uInfo = [
    {
      name: 'email',
      type: 'email',
      text: 'EMAIL',
      value: email,
      control: setEmail,
    },
    {
      name: 'plain_password',
      type: 'password',
      text: 'PASSWORD',
      value: password,
      control: setPassword,
    },
    {
      name: 'confirm_password',
      type: 'password',
      text: 'CONFIRM PASSWORD',
      value: cPassword,
      control: setCPassword,
    },
  ];

  return (
    <Container style={{ width: '100%' }}>
      <MainText>사용자 정보</MainText>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {uInfo.map((v, i) => (
          <InputContainer
            // eslint-disable-next-line react/no-array-index-key
            key={i}
          >
            <Label>{v.text}</Label>
            <Input
              style={{ width: '60%', marginLeft: 'auto' }}
              ref={register}
              name={v.name}
              type={v.type}
              value={v.value}
              onChange={e => v.control(e.target.value)}
              borderBottom="1px solid #002060"
            />
          </InputContainer>
        ))}
        <InputContainer style={{ lineHeight: '30px', width: '100%' }}>
          <Label>이메일 수신 동의</Label>
          <Input
            style={{
              width: '45%',
              height: '30px',
              transform: 'scale(1.8)',
            }}
            ref={register}
            name="letter_ok"
            type="checkbox"
            value={lo}
            onClick={() => setLO(!lo)}
          />
        </InputContainer>
        <Button
          style={{ width: '150px', height: 'auto', marginLeft: 'auto' }}
          type="submit"
        >
          다음
        </Button>
      </Form>
    </Container>
  );
}

PersonInfo.propTypes = {
  setRegData: PropTypes.func.isRequired,
  setCurState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  regData: PropTypes.object.isRequired,
};
