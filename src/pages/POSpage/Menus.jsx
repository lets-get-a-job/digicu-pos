/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Container, Text } from '../../components/atom';
import { addList, plusCount } from './store';

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

function Menus({ menuss, dispatch }) {
  const menus = [
    { name: '돈까스', price: 7000 },
    { name: '물', price: 2000 },
    { name: '라면', price: 3000 },
    { name: '떡라면', price: 5000 },
    { name: '제육덮밥', price: 6000 },
    { name: '우동', price: 4000 },
    { name: '김치찌개', price: 6000 },
  ];

  const menuClick = (name, price) => {
    const id = menuss.findIndex(element => element.name === name);
    if (id === -1) dispatch(addList({ name, price }));
    else dispatch(plusCount({ id, price }));

    console.log(menuss);
  };

  return (
    <MainContainer>
      {menus.map((v, i) => {
        if (i % 2 === 0)
          return (
            <MenuContainer
              key={v.name + v.price}
              onClick={() => menuClick(v.name, v.price)}
            >
              <Text>{v.name}</Text>
              <Text>{v.price}원</Text>
            </MenuContainer>
          );
        return (
          <MenuContainer
            style={{ marginLeft: 'auto' }}
            key={v.name + v.price}
            onClick={() => menuClick(v.name, v.price)}
          >
            <Text>{v.name}</Text>
            <Text>{v.price}원</Text>
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

Menus.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { menuss: state.menus };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menus);
