import React from 'react';
import styled from 'styled-components';
import { Button, Container, Text } from '../../components/atom';

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 35%;
  min-width: 450px;
  height: 55vh;
  min-height: 600px;
  padding: 5px;
  overflow: scroll;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;

const MenuContainer = styled(Button)`
  width: 40%;
  min-width: 150px;
  height: 12vh;
  min-height: 120px;
  padding: 0px;
  justify-content: center;
  margin: 20px;
  border-radius: 5px;
  background: rgba(128, 128, 128, 0.2);
  box-shadow: 0px 0px 4px 3px rgba(128, 128, 128, 0.7);
`;

const Label = styled(Text)`
  font-size: 40px;
`;

export default function Menus() {
  const menus = [
    { name: '돈까스', price: '7000원' },
    { name: '물', price: '2000원' },
    { name: '라면', price: '3000원' },
    { name: '떡라면', price: '5000원' },
    { name: '제육덮밥', price: '6000원' },
    { name: '우동', price: '4000원' },
    { name: '김치찌개', price: '6000원' },
  ];
  return (
    <MainContainer>
      {menus.map((v, i) => {
        if (i % 2 === 0)
          return (
            <MenuContainer key={v.name + v.price}>
              <Text>{v.name}</Text>
              <Text>{v.price}</Text>
            </MenuContainer>
          );
        return (
          <MenuContainer style={{ marginLeft: 'auto' }} key={v.name + v.price}>
            <Text>{v.name}</Text>
            <Text>{v.price}</Text>
          </MenuContainer>
        );
      })}
      {menus.length % 2 === 0 ? (
        <MenuContainer>
          <Label>+</Label>
        </MenuContainer>
      ) : (
        <MenuContainer style={{ marginLeft: 'auto' }}>
          <Label>+</Label>
        </MenuContainer>
      )}
    </MainContainer>
  );
}
