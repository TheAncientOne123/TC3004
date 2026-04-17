import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hola from './Hola.jsx'
import Segundo from './Segundo.js'
import Tercero from './Tercero.js'
import Fetching from './fetching.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hola />
    <Segundo />
    <Tercero />
    <Fetching />


  </StrictMode>,
)
