import React from 'react';
import { GlobalStyle, light } from 'theme';
import { ThemeProvider } from 'styled-components';
import Routes from 'routes/index.routes';
import { ToastContainer  } from 'react-toastify';

function App() {
  return (
    <ThemeProvider theme={light}>
      <ToastContainer
        position="bottom-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> 
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
