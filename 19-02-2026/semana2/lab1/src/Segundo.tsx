import React from 'react'

const Segundo = () => {
    const saludo = "Hola Mundo";

    function mostrarSaludo() {
        return('Saludando desde la función');
    }

  return (
    <div>Segundo
        {saludo}
        {mostrarSaludo()}
    </div>
  )
}

export default Segundo