// src/index.js — React 18 uyumlu
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// HelmetProvider React 18'de gerekli
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);


