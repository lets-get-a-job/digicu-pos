/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Container, Text, Button } from '../../components/atom';
import { TableBox } from '../../components/mocules';

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

export default function EntireSale() {
  const date = new Date();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate();
  const list = [
    {
      title: 'head',
      content: [
        { text: '#', width: '10%' },
        { text: '메뉴', width: '' },
        { text: '가격', width: '' },
        { text: '시간', width: '' },
      ],
    },
    {
      title: 'body',
      contents: [
        {
          content: [
            { text: '1' },
            { text: '치킨' },
            { text: '140,000' },
            { text: 'PM 14:30' },
          ],
        },
        {
          content: [
            { text: '2' },
            { text: '피자' },
            { text: '10,000' },
            { text: 'PM 14:45' },
          ],
        },
        {
          content: [
            { text: '3' },
            { text: '과자' },
            { text: '100,000' },
            { text: 'PM 15:20' },
          ],
        },
        {
          content: [
            { text: '4' },
            { text: '이프로부족할때' },
            { text: '1,000' },
            { text: 'PM 16:30' },
          ],
        },
      ],
    },
  ];
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
        >
          {'<'}
        </Button>
        <DateText>{`${month} / ${day}`}</DateText>
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
        >
          {'>'}
        </Button>
      </DateContainer>
      <SaleContainer>
        <TableBox list={list} />
      </SaleContainer>
    </EntireContainer>
  );
}
