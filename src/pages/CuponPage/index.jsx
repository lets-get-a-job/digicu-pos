/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Header, NavBar, MenuBar } from '../../components/mocules';
import { MainContainer, Container } from '../../components/atom';
import PanelSwitch from './PanelSwitch';
import CurrentCupon from './Panel/CurrentCupon';
import RegistCupon from './Panel/RegistCupon';
import IssuedCupon from './Panel/IssuedCupon';

const SubContainer = styled(Container)`
  width: 70vw;
  min-width: 750px;
  margin: 0px 20vw;
  padding: 20px 0px 30px 0px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const Panel = styled.div`
  width: 79%;
  min-width: 600px;
  height: auto;
  min-height: 500px;
  max-height: 1500px;
  padding: 0px;
  margin: 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2%;
  padding: 20px 10px;
`;

export default function Page() {
  const menus = [
    {
      text: '현재 등록 쿠폰',
      path: '/cupon/currentcupon',
      component: CurrentCupon,
    },
    {
      text: '새 쿠폰 등록하기',
      path: '/cupon/registcupon',
      component: RegistCupon,
    },
    {
      text: '쿠폰 발급 내역',
      path: '/cupon/issuedcupon',
      component: IssuedCupon,
    },
  ];
  return (
    <>
      <Header />
      <MainContainer style={{ backgroundColor: 'white' }}>
        <NavBar />
        <SubContainer>
          <MenuBar menus={menus} />
          <Panel>
            <PanelSwitch cuponPanels={menus} />
          </Panel>
        </SubContainer>
      </MainContainer>
    </>
  );
}
