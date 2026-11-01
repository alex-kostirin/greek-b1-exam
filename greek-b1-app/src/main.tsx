import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { AppStoreProvider } from './app/providers/AppStoreProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppStoreProvider>
      <App />
    </AppStoreProvider>
  </React.StrictMode>
);
