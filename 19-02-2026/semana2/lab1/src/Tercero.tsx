import React from 'react'
import { bancos } from './assets/bancos.js'

function Tercero() {
  return (
    <div>
      <h1>Lista de bancos</h1>
      <ul>
        {bancos.map((b) => (
          <li key={b.id}>{b.name} - {b.country}</li>
        ))}
      </ul>
    </div>
  )
}

export default Tercero