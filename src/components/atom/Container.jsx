import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
`;

const MainContainer = styled(Container)`
  background-color: rgba(173, 173, 173, 0.13);
  width: auto;
  min-width: 1440px;
  height: auto;
  min-height: 100vh;
  padding: 50px;
  position: relative;
`;

export { Container, MainContainer };
