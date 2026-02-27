/**
 * Convierte un objeto de formulario en un array de { label, value } para mostrar.
 * @param {Object} data - Objeto con los datos del formulario
 * @returns {Array<{ label: string, value: string }>}
 */
export const formDataToDisplay = (data) => {
  const labels = {
    matricula: 'Matrícula',
    nombre: 'Nombre',
    apellidos: 'Apellidos',
    edad: 'Edad',
    universidad: 'Universidad',
    carrera: 'Carrera',
  };

  return Object.entries(data).map(([key, value]) => ({
    label: labels[key] || key,
    value: String(value ?? ''),
  }));
};
