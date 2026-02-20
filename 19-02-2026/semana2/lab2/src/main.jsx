import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CustomHook } from './components/CustomHook.jsx'
import { PokemonExplorer } from './components/PokemonExplorer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHook />
    <PokemonExplorer />
  </StrictMode>,
)
