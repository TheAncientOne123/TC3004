import React, { useState, useEffect } from 'react';
import { createEmployee, deleteEmployee, getEmployees } from '../services/api-empleados.js';
import EmployeeItem from './EmpleadosItem';
import EmployeeForm from './EmpleadosForm';
const EmployeeList = () => {
    const [empleados, setEmpleados] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const data = await getEmployees();
            setEmpleados(data);
            setError(null);
        } catch (err) {
            setError('Error al cargar los empleados');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchEmployees();
    }, []);
    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este empleado?')) {
            try {
                await deleteEmployee(id);
                setEmpleados(empleados.filter(empleado => empleado.id !== id));
            } catch (err) {
                setError('Error al eliminar el empleado');
            }
        }
    };
    const handleEdit = (id) => {
        setEditingId(id);
    };
    const handleCancelEdit = () => {
        setEditingId(null);
    };
    const handleFormSubmit = () => {
        fetchEmployees();
        setEditingId(null);
    };

    if (loading) return <div>Cargando empleados...</div>;
    if (error) return <div className="error">{error}</div>;
    return (
        <div className="employee-list">
            <h2>Lista de Empleados</h2>
            {!editingId && (
                <div className="new-employee">
                    <h3>Agregar Nuevo Empleado</h3>
                    <EmployeeForm onSubmitSuccess={handleFormSubmit} />
                </div>
            )}
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Posición</th>
                        <th>Coche</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.length === 0 ? (
                        <tr>
                            <td colSpan={4}>No hay empleados registrados.</td>
                        </tr>
                    ) : (
                        empleados.map(empleado => (
                            <React.Fragment key={empleado.id}>
                                {editingId === empleado.id ? (
                                    <tr>
                                        <td colSpan={4} className="edit-form-cell">
                                            <div className="edit-form">
                                                <h3>Editar Empleado</h3>
                                                <EmployeeForm
                                                    empleado={empleado}
                                                    onSubmitSuccess={handleFormSubmit}
                                                    onCancel={handleCancelEdit}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    <EmployeeItem
                                        empleado={empleado}
                                        onDelete={() => handleDelete(empleado.id)}
                                        onEdit={() => handleEdit(empleado.id)}
                                    />
                                )}
                            </React.Fragment>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default EmployeeList;