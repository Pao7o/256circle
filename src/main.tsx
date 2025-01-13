import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import App from './App.tsx';
import './index.css';

console.log('Starting application...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('❌ FATAL: Root element not found');
  throw new Error('Failed to find the root element');
}

try {
  console.log('Initializing React root...');
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
  console.log('✅ React root rendered successfully');
} catch (error) {
  console.error('❌ Rendering failed:', error);
}
