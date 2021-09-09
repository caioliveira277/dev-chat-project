import React, { useEffect } from 'react';
import { GlobalStyle, light } from 'theme';
import { ThemeProvider } from 'styled-components';
import Routes from 'routes/index.routes';
import { ToastContainer  } from 'react-toastify';
import socket from 'adapters/ws';
import { toast } from 'react-toastify';

function App() {
  useEffect(() => {
    socket.on('requestError', (data: any) => {
      toast.error(`❕ ${data.message}`);
    });
  }, []);

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
