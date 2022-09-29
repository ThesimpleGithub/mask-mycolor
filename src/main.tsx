import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './utils/global';
import theme from './utils/theme';

axios.defaults.baseURL = import.meta.env.DEV
  ? 'http://server.mycolor.kr:7000'
  : 'https://server.mycolor.kr:7001';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
);
