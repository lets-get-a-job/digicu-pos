/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PrpoTypes from 'prop-types';
import styled from 'styled-components';
import {
  Container,
  Text,
  Button,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
} from '../../components/atom';
import { InquiryPayment } from '../../repo/payment';
import useUser from '../../hook/useUser';
import { date, splitDate } from '../../date';

const EntireContainer = styled(Container)`
  width: 64%;
  height: 90vh;
  min-width: 800px;
  min-height: 600px;
  background-color: #dbdbdb;
  padding: 2vh 10px;
  box-shadow: 0.1vw 0.1vw 0.5vw 0.2vw rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;

const DateContainer = styled(Container)`
  width: 100%;
  height: 12vh;
  min-height: 80px;
  padding: 1vh;
  background-color: white;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
`;

const DateText = styled(Text)`
  font-weight: 700;
  font-size: 70px;
`;

const SaleContainer = styled(Container)`
  width: 100%;
  height: 70vh;
  min-height: 500px;
  margin-top: 1vh;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  overflow: scroll;
`;

const TBodyTr = styled(Tr)`
  :hover {
    background-color: rgba(212, 212, 212, 0.2);
  }
  cursor: pointer;
`;

const PointBtn = styled(Button)`
  width: 50px;
  height: 50px;
  background: none;
  margin: 20px;
  color: black;
  font-size: 50px;
  padding: 0px;
  line-height: 50px;
`;

export default function EntireSale({ setDetailList }) {
  const [curDate, setCurDate] = useState(splitDate(new Date()));

  const [user, setUser] = useUser();
  const [paymentList, setPaymentList] = useState([]);

  const endDate = targetDate => {
    const tempDate = new Date(targetDate);
    tempDate.setDate(tempDate.getDate() + 1);
    const { year, month, day } = splitDate(tempDate);
    return date(new Date(year, month - 1, day));
  };

  useEffect(() => {
    const targetDate = date(
      new Date(curDate.year, curDate.month - 1, curDate.day),
    );
    const payload = {
      companyNumber: user.companyInfo.company_number,
      params: {
        start: targetDate,
        end: endDate(targetDate),
      },
    };
    InquiryPayment(user.token, payload).then(d => {
      console.log(d);
      setPaymentList(d);
      setDetailList([]);
      console.log(d);
    });
  }, [curDate]);

  const PoinBtnClicked = type => {
    const tempDate = new Date(curDate.year, curDate.month - 1, curDate.day);
    tempDate.setDate(tempDate.getDate() + type);
    setCurDate(splitDate(tempDate));
  };

  return (
    <EntireContainer>
      <DateContainer>
        <PointBtn onClick={() => PoinBtnClicked(-1)}>{'<'}</PointBtn>
        <DateText>{`${curDate.month} / ${curDate.day}`}</DateText>
        <PointBtn onClick={() => PoinBtnClicked(1)}>{'>'}</PointBtn>
      </DateContainer>
      <SaleContainer>
        <Table>
          <Thead>
            <Tr bgc="rgba(128, 128, 128, 0.2)">
              <Th width="30%">#</Th>
              <Th width="30%">메뉴</Th>
              <Th width="20%">가격</Th>
              <Th width="20%">시간</Th>
            </Tr>
          </Thead>
          <Tbody>
            {paymentList.map((v, i) => (
              <TBodyTr
                key={v.payment_group_id}
                onClick={() => {
                  setDetailList(v);
                }}
              >
                <Td>{i + 1}</Td>
                <Td>
                  {v.items.length === 1
                    ? v.items[0].menu_name
                    : `${v.items[0].menu_name}...`}
                </Td>
                <Td>{v.total}</Td>
                <Td>{v.payment_time}</Td>
              </TBodyTr>
            ))}
          </Tbody>
        </Table>
      </SaleContainer>
    </EntireContainer>
  );
}

EntireSale.propTypes = {
  setDetailList: PrpoTypes.func.isRequired,
};
