/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/atom';
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
  padding: 2vw;
  overflow: scroll;
`;

const Page = () => (
  <MainContainer>
    <EntireSale />
    <PartialSale />
  </MainContainer>
);

export default React.memo(Page);
