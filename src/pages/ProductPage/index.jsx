/* eslint-disable no-unused-vars */
import React from 'react';
import { Header, NavBar, MenuBar } from '../../components/mocules';
import { MainContainer } from '../../components/atom';
import { SubContainer, Panel } from '../CuponPage';
import PanelSwitch from './PanelSwitch';
import CurrentProduct from './Panel/CurrentProduct';
import RegistProduct from './Panel/RegistProduct';

function Page() {
  const menus = [
    {
      text: '현재 등록 음식',
      path: '/product/currentproduct',
      component: CurrentProduct,
    },
    {
      text: '새 음식 등록하기',
      path: '/product/registproduct',
      component: RegistProduct,
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

export default React.memo(Page);
