import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import Router from './Router';
import UserContextProvider from './hoc/UserContextProvider';

const GlobalStyles = createGlobalStyle`
${reset}
*{
  box-sizing:border-box;
}
body{
  font-family: 'Montserrat', sans-serif;
  font-size:16px;


  a{
  text-decoration: none;
  color:inherit;
  }

  h1,h2,h3,h4 {
    display: block;
  }

}
`;

function App() {
  return (
    <>
      <UserContextProvider>
        <Router />
        <GlobalStyles />
      </UserContextProvider>
    </>
  );
}

export default App;
