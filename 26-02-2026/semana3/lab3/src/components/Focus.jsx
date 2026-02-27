import React from 'react'
import { useRef } from 'react'

export const Focus = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  }

  return (
    <>
        <h1>Pantalla Focus</h1>
        <hr></hr>

        <input type="text" placeholder='Nombre' className='form-control' ref={inputRef}></input>
        <input type="text" placeholder='Apellido' className='form-control'></input>
        <input ref={ inputRef } type="text" placeholder='Edad' className="form-control"/>
            <input type='textarea' placeholder='Comentarios' className="form-control"></input>
        <button className='btn btn-primary mt-2' onClick={ onClick }>Enviar</button>
    </>
  )
}

export default Focus