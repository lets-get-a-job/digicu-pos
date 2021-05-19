/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Container, Text } from '../../components/atom';
import { addList, plusCount } from './store';
import { InquiryMenu } from '../../repo/menu';
import useUser from '../../hook/useUser';

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
  align-items: flex-start;
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
  const [user, setUser] = useUser();
  const [menus, setMenus] = useState([]);

  let idx = 1;

  useEffect(() => {
    InquiryMenu(user.token, user.companyInfo.company_number).then(d => {
      console.log(d.data);
      setMenus(d.data);
    });
  }, [user]);

  const menuClick = (name, price) => {
    const id = menuss.findIndex(element => element.name === name);
    if (id === -1) dispatch(addList({ name, price }));
    else dispatch(plusCount({ id, price }));

    console.log(menuss);
  };

  return (
    <MainContainer>
      {menus.map((v, i) => {
        if (v.company_number === user.companyInfo.company_number) {
          if (idx++ % 2 === 0)
            return (
              <MenuContainer
                key={v.menu_name + v.menu_value}
                onClick={() => menuClick(v.menu_name, v.menu_value)}
              >
                <Text>{v.menu_name}</Text>
                <Text>{v.menu_value}원</Text>
              </MenuContainer>
            );
          return (
            <MenuContainer
              style={{ marginLeft: 'auto' }}
              key={v.menu_name + v.menu_value}
              onClick={() => menuClick(v.menu_name, v.menu_value)}
            >
              <Text>{v.menu_name}</Text>
              <Text>{v.menu_value}원</Text>
            </MenuContainer>
          );
        }
        return null;
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
