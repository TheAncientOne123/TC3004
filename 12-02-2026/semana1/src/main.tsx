import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './classes/primer.ts';
import './classes/segundo.ts';
import './classes/tercero.ts';
import './classes/cuatro.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
