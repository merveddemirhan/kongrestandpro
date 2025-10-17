import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Stil dosyanız
import App from './App';

// DÜZELTME BURADA: Eksik olan bu satır hataya neden oluyordu
import { HelmetProvider } from 'react-helmet-async'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

// Provider (sağlayıcı) App bileşeninizi sarmalı
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
