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

const EntireContainer = styled(Container)`
  width: 64%;
  height: 90vh;
  min-width: 800px;
  min-height: 600px;
  background-color: #d8e2f3;
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
`;

const TBodyTr = styled(Tr)`
  :hover {
    background-color: rgba(212, 212, 212, 0.2);
  }
  cursor: pointer;
`;

export default function EntireSale({ setDetailList }) {
  const curdate = new Date();
  const year = curdate.getFullYear();
  const month = curdate.getMonth() + 1;
  const day = curdate.getDate();
  const [date, setDate] = useState({ year, month, day });

  const [user, setUser] = useUser();
  const [paymentList, setPaymentList] = useState([]);

  const endDate = targetDate => {
    const tempDate = new Date(targetDate);
    console.log(tempDate);
    tempDate.setDate(tempDate.getDate() + 1);

    const ty = tempDate.getFullYear();
    const tm = tempDate.getMonth() + 1;
    const td = tempDate.getDate();

    console.log(ty, tm, td);

    let monthS;
    if (tm < 10) monthS = `0${tm.toString()}`;
    else monthS = tm.toString();
    let dayS;
    if (td < 10) dayS = `0${td.toString()}`;
    else dayS = td.toString();

    return `${ty}-${monthS}-${dayS}`;
  };

  useEffect(() => {
    let monthS;
    if (date.month < 10) monthS = `0${date.month.toString()}`;
    else monthS = date.month.toString();
    let dayS;
    if (date.day < 10) dayS = `0${date.day.toString()}`;
    else dayS = date.day.toString();
    const targetDate = `${date.year}-${monthS}-${dayS}`;

    const params = { start: targetDate, end: endDate(targetDate) };
    console.log(params);
    InquiryPayment(user.token, user.companyInfo.company_number, params).then(
      d => {
        setPaymentList(d);
        setDetailList([]);
        console.log(d);
      },
    );
  }, [date]);

  const preDateBtnClicked = () => {
    const tempDate = new Date(date.year, date.month - 1, date.day);
    tempDate.setDate(tempDate.getDate() - 1);
    setDate({
      year: tempDate.getFullYear(),
      month: tempDate.getMonth() + 1,
      day: tempDate.getDate(),
    });
  };

  const nextDateBtnClicked = () => {
    const tempDate = new Date(date.year, date.month - 1, date.day);
    tempDate.setDate(tempDate.getDate() + 1);
    setDate({
      year: tempDate.getFullYear(),
      month: tempDate.getMonth() + 1,
      day: tempDate.getDate(),
    });
  };

  return (
    <EntireContainer>
      <DateContainer>
        <Button
          style={{
            width: '50px',
            height: '50px',
            background: 'none',
            margin: '20px',
            color: 'black',
            fontSize: '50px',
            padding: '0px',
            lineHeight: '50px',
          }}
          onClick={preDateBtnClicked}
        >
          {'<'}
        </Button>
        <DateText>{`${date.month} / ${date.day}`}</DateText>
        <Button
          style={{
            width: '50px',
            height: '50px',
            background: 'none',
            margin: '20px',
            color: 'black',
            fontSize: '50px',
            padding: '0px',
            lineHeight: '50px',
          }}
          onClick={nextDateBtnClicked}
        >
          {'>'}
        </Button>
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
