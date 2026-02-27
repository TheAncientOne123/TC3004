import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SimpleForm } from './components/SimpleForm'
import { LoginForm } from './components/LoginForm/LoginForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Formulario Login - Comparación</h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Tu versión (SimpleForm)</h2>
        <SimpleForm />
      </section>

      <hr style={{ margin: '2rem 0', border: '1px solid rgba(0,0,0,0.2)' }} />

      <section>
        <LoginForm />
      </section>
    </div>
  </StrictMode>,
)
