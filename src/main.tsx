import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primeicons/primeicons.css'
import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
