/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Text, Button, Input } from '../../../../components/atom';
import {
  DetailCoupon,
  DeleteCoupon,
  ModifyCoupon,
} from '../../../../repo/coupon';
import useUser from '../../../../hook/useUser';

const DetailContainer = styled(Container)`
  width: 100%;
  height: auto;
  margin: 30px;
  padding: 0px;
  border-top: 1px solid black;
`;

const SubContainer = styled(Container)`
  flex-direction: row;
  padding-top: 20px;
  width: 90%;
  justify-content: space-around;
`;

export default function Detail({
  isClose,
  setIsClose,
  couponId,
  setCouponId,
  setModal,
  setIsChange,
}) {
  const [info, setInfo] = useState({});
  const [status, setStatus] = useState('PENDING');
  const [user, setUser] = useUser();
  const [modify, setModify] = useState(true);
  const [border, setBorder] = useState('none');

  // 모달이 닫히면 초기화
  useEffect(() => {
    if (isClose) {
      setInfo({ name: '', goal: '', period: '', value: '', type: '' });
      setIsClose(false);
    }
  }, [isClose]);

  // 모달이 열릴때 불러오기
  useEffect(() => {
    if (couponId !== 0) {
      DetailCoupon(user.token, couponId).then(d => {
        setInfo(d.data);
        setStatus('SUCCESS');
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [couponId]);

  const modifyBtnClick = () => {
    if (modify) {
      setModify(false);
      setBorder('1px solid #002060');
    } else {
      setModify(true);
      setBorder('none');
      const payload = {
        name: info.name,
        value: parseInt(info.value),
        goal: parseInt(info.goal),
        type: info.type,
        period: parseInt(info.period),
      };
      console.log(payload);
      ModifyCoupon(user.token, payload, couponId);
    }
  };

  // delete버튼 클릭
  const deleteBtnClick = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      DeleteCoupon(user.token, couponId).then(d => {
        setIsChange(true);
        setModal(false);
        setCouponId(0);
        alert('삭제되었습니다.');
      });
    }
  };

  return (
    <DetailContainer>
      {status === 'SUCCESS' ? (
        <>
          <SubContainer>
            <Text>쿠폰 내용</Text>
            <Input
              value={info.name}
              onChange={e => {
                setInfo({ ...info, name: e.target.value });
              }}
              disabled={modify}
              borderBottom={border}
            />
          </SubContainer>
          <SubContainer>
            <Text>필요 개수</Text>
            <Input
              value={info.goal}
              onChange={e => {
                setInfo({
                  ...info,
                  goal: e.target.value.replace(/[^0-9]/g, ''),
                });
              }}
              disabled={modify}
              borderBottom={border}
            />
          </SubContainer>
          <SubContainer>
            <Text>유효 기간</Text>
            <Input
              value={info.period}
              onChange={e => {
                setInfo({
                  ...info,
                  period: e.target.value.replace(/[^0-9]/g, ''),
                });
              }}
              disabled={modify}
              borderBottom={border}
            />
          </SubContainer>
          <SubContainer>
            <Text>쿠폰 가치</Text>
            <Input
              value={info.value}
              onChange={e => {
                setInfo({
                  ...info,
                  value: e.target.value.replace(/[^0-9]/g, ''),
                });
              }}
              disabled={modify}
              borderBottom={border}
            />
          </SubContainer>
          <SubContainer>
            <Text>할인 종류</Text>
            <Input value={info.type} onChange={null} disabled />
          </SubContainer>
          <SubContainer>
            <Button onClick={modifyBtnClick}>수정하기</Button>
            <Button onClick={deleteBtnClick}>삭제하기</Button>
          </SubContainer>
        </>
      ) : (
        '...로딩중'
      )}
    </DetailContainer>
  );
}

Detail.propTypes = {
  isClose: PropTypes.bool.isRequired,
  setIsClose: PropTypes.func.isRequired,
  couponId: PropTypes.number.isRequired,
  setCouponId: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  setIsChange: PropTypes.func.isRequired,
};
