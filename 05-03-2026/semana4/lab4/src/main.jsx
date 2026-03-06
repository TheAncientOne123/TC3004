import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Coches from './components/Coches.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Coches />
    <App />
  </StrictMode>,
)
