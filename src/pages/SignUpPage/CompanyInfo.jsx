/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import DaumPostcode from 'react-daum-postcode';
import { Modal } from '../../components/mocules';
import { Container, Button, Input, Form } from '../../components/atom';
import { MainText, InputContainer, Label } from './PersonInfo';
import { SignUp } from '../../repo/auth';

export default function CompanyInfo({ setRegData, setCurState, regData }) {
  const [address, setAddress] = useState('');
  const [modal, setModal] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const handleOnComplete = data => {
    setAddress(data.address);
    setModal(false);
  };

  const onSubmit = data => {
    console.log(data);
    if (data.company_homepage === '') {
      data.company_homepage = null;
    }
    if (data.company_logo === '') {
      data.company_logo = null;
    }
    console.log(!data.company_homepage);
    if (data.company_address === '') {
      alert('주소를 입력하세요');
    } else if (data.company_number.length !== 10) {
      alert('사업자 등록 번호를 입력하세요');
    } else if (data.company_name === '') {
      alert('매장 이름을 입력하세요');
    } else if (
      !(
        data.company_phone.length === 8 ||
        data.company_phone.length === 10 ||
        data.company_phone.length === 11
      )
    ) {
      alert('매장 전화 번호를 입력하세요');
    } else if (data.company_owner === '') {
      alert('점주를 입력하세요');
    } else {
      setRegData({ ...regData, company_info: { ...data } });
      setTrigger(true);
    }
  };

  useEffect(() => {
    if (trigger) {
      console.log(regData);
      SignUp(regData)
        .then(data => {
          console.log(data);
          alert(
            '회원가입 신청을 완료했습니다. 이메일 인증을 통해 회원가입을 마무리해주세요.',
          );
          history.push('/');
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setTrigger(false);
        });
    }
  }, [trigger]);

  const companyInfo = [
    { name: 'company_number', type: 'text', text: '사업자등록번호' },
    { name: 'company_name', type: 'text', text: '매장명' },
    { name: 'company_phone', type: 'text', text: '매장 전화번호' },
    { name: 'company_owner', type: 'text', text: '점주' },
    { name: 'company_homepage', type: 'text', text: '홈페이지' },
  ];

  return (
    <Container style={{ width: '100%' }}>
      <MainText>매장 정보</MainText>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>매장 위치</Label>
          <div
            style={{
              display: 'flex',
              width: '60%',
            }}
          >
            <Input
              style={{ width: '75%', overflow: 'auto', fontSize: '14px' }}
              ref={register}
              name="company_address"
              type="text"
              borderBottom="1px solid #002060"
              value={address}
              onChange={() => setModal(true)}
            />
            <Button
              type="button"
              style={{
                width: 'auto',
                fontSize: '14px',
                padding: '5px',
                marginLeft: 'auto',
              }}
              onClick={() => {
                setModal(true);
              }}
            >
              검색하기
            </Button>
          </div>
        </InputContainer>
        {companyInfo.map((v, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <InputContainer key={i}>
            <Label>{v.text}</Label>
            <Input
              style={{ width: '60%' }}
              ref={register}
              name={v.name}
              type={v.type}
              borderBottom="1px solid #002060"
            />
          </InputContainer>
        ))}
        <InputContainer>
          <Label>회사 로고</Label>
          <Input
            style={{ width: '60%' }}
            ref={register}
            name="company_logo"
            type="text"
            borderBottom="1px solid #002060"
          />
        </InputContainer>
        <div style={{ display: 'flex' }}>
          <Button
            style={{ width: '150px' }}
            onClick={() => {
              setCurState('PersonInfo');
            }}
          >
            이전
          </Button>
          <Button style={{ width: '150px', marginLeft: 'auto' }} type="submit">
            회원가입
          </Button>
        </div>
      </Form>
      <Modal visible={modal} onCloseBtnClicked={() => setModal(false)}>
        <DaumPostcode onComplete={handleOnComplete} />
      </Modal>
    </Container>
  );
}

CompanyInfo.propTypes = {
  setRegData: PropTypes.func.isRequired,
  setCurState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  regData: PropTypes.object.isRequired,
};
