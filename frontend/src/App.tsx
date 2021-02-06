import React from 'react';
import { GlobalStyle, light } from 'theme';
import { ThemeProvider } from 'styled-components';
import Routes from 'routes/index.routes';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
