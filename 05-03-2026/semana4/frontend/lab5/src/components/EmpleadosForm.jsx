import React, { useEffect, useState } from 'react';
import { createEmployee, updateEmployee } from '../services/api-empleados.js';

const EmployeeForm = ({ empleado, onSubmitSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    tipoCoche: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!empleado) return;

    setFormData({
      name: empleado.name || '',
      position: empleado.position || '',
      tipoCoche: empleado.tipoCoche || '',
    });
  }, [empleado]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError('El nombre del empleado es obligatorio');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      if (empleado) {
        await updateEmployee(empleado.id, formData);
      } else {
        await createEmployee(formData);
      }

      setFormData({ name: '', position: '', tipoCoche: '' });

      if (onSubmitSuccess) onSubmitSuccess();
    } catch (err) {
      setError('Error al guardar el empleado');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      {error && <div className="error">{error}</div>}

      <div className="form-group">
        <label htmlFor="name">Nombre*:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={submitting}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="position">Posición:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          disabled={submitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="tipoCoche">Tipo de Coche:</label>
        <input
          type="text"
          id="tipoCoche"
          name="tipoCoche"
          value={formData.tipoCoche}
          onChange={handleChange}
          disabled={submitting}
        />
      </div>

      <div className="form-actions">
        <button type="submit" disabled={submitting}>
          {submitting ? 'Guardando...' : empleado ? 'Actualizar' : 'Crear'}
        </button>

        {onCancel && (
          <button type="button" onClick={onCancel} disabled={submitting}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default EmployeeForm;