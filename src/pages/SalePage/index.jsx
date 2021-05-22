/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../components/atom';
import { Header } from '../../components/mocules';
import EntireSale from './EntireSale';
import PartialSale from './PartialSale';

const MainContainer = styled(Container)`
  width: 100vw;
  min-width: 1280px;
  height: 100vh;
  min-height: 720px;
  margin: auto auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4vw;
  overflow: scroll;
  position: relative;
`;

export default function SalePage() {
  const [detailList, setDetailList] = useState([]);

  return (
    <MainContainer>
      <Header except="sale" top="0px" right="0px" />
      <EntireSale setDetailList={setDetailList} />
      <PartialSale detailList={detailList} />
    </MainContainer>
  );
}
