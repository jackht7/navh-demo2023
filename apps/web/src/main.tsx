import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { MetaMaskContextProvider } from './hooks/useMetaMask';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MetaMaskContextProvider>
    <App />
  </MetaMaskContextProvider>
);
