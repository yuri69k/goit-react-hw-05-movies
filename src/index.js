import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyles } from 'styles/GlobalStyles.styled';
import { fetcher } from './services/useRequest';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyles />
        <App />
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>
);
