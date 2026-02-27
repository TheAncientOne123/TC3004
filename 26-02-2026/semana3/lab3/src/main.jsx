import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SimpleForm } from './components/SimpleForm';
import { Focus } from './components/Focus';
import {CallBackHook} from './components/CallbackHook';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleForm />

  </StrictMode>,
)
