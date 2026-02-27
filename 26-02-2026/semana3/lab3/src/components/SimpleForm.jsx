import React from 'react'
import { useRef } from 'react'

import { useEffect, useState } from 'react'

import { Message } from './message';

import './Form.css';

export const SimpleForm = () => {

      const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }

    const [formState, setFormState] = useState({
        matricula: 'A01234693',
        email: 'hector@sanchez.com',
        nombre: 'Hector',
        apellido: 'Sanchez',
        edad: '21',
        universidad: 'Tec de Monterrey',
        carrera: 'ITC'
    });

    const { matricula, email, nombre, apellido, edad, universidad, carrera } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
        //console.log('useEffect called!');
    }, []);

    useEffect(() => {
        //console.log('formState changed!');
    }, [ formState ]);

    useEffect(() => {
        //console.log('email changed!');
    }, [ email ]);


    return (
      <>

        <form className="contact-us">
          <div className="field">
            <input
              type="text"
              name="matricula"
              value={matricula}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="field">
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="field">
            <input
              type="text"
              name="apellido"
              value={apellido}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="field">
            <input
              type="text"
              name="edad"
              value={edad}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="field">
            <input
              type="text"
              name="universidad"
              value={universidad}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="field">
            <input
              type="text"
              name="carrera"
              value={carrera}
              onChange={onInputChange}
              required
            />
          </div>

          <input
          type="submit"
            value="Enviar"
            onClick={onClick}
           />
        </form>

        {matricula === '' && <Message />}
      </>
    );
    
}

export default SimpleForm