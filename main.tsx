

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

// BULLETPROOF environment detection
const isDev = (() => {
  try {
    if (typeof window === 'object' && window !== null && window.location) {
      const hostname = window.location.hostname;
      const port = window.location.port;
      return hostname === 'localhost' || hostname === '127.0.0.1' || port === '5173';
    }
    return false;
  } catch {
    return false;
  }
})();

// Safe development logging
if (isDev) {
  try {
    console.log('🚀 Aygıt Technologies - Development Mode Active');
  } catch {
    // Silent if console not available
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)