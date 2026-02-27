import React, { useState, useEffect } from 'react';
import { useFocus } from '../../hooks/useFocus';
import { FormInput } from './FormInput';
import { FormDisplay } from './FormDisplay';
import './LoginForm.css';

const INITIAL_STATE = {
  matricula: '',
  nombre: '',
  apellidos: '',
  edad: '',
  universidad: '',
  carrera: '',
};

export const LoginForm = () => {
  const [formState, setFormState] = useState(INITIAL_STATE);
  const [submittedData, setSubmittedData] = useState(null);
  const [matriculaRef, setMatriculaFocus] = useFocus();

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formState });
    setMatriculaFocus();
  };

  useEffect(() => {
    setMatriculaFocus();
  }, [setMatriculaFocus]);

  useEffect(() => {
    if (submittedData) {
      setMatriculaFocus();
    }
  }, [submittedData, setMatriculaFocus]);

  return (
    <article className="extracto">
      <header className="extracto-header">
        <h2 className="extracto-title">Registro</h2>
      </header>

      <form className="extracto-form" onSubmit={handleSubmit}>
        <FormInput
          label="Matrícula"
          name="matricula"
          value={formState.matricula}
          onChange={onInputChange}
          inputRef={matriculaRef}
          required
        />
        <FormInput label="Nombre" name="nombre" value={formState.nombre} onChange={onInputChange} required />
        <FormInput label="Apellidos" name="apellidos" value={formState.apellidos} onChange={onInputChange} required />
        <FormInput label="Edad" name="edad" value={formState.edad} onChange={onInputChange} required />
        <FormInput label="Universidad" name="universidad" value={formState.universidad} onChange={onInputChange} required />
        <FormInput label="Carrera" name="carrera" value={formState.carrera} onChange={onInputChange} required />
        <button type="submit" className="extracto-submit">Enviar</button>
      </form>

      {submittedData && (
        <div className="extracto-output">
          <FormDisplay data={submittedData} />
        </div>
      )}
    </article>
  );
};
