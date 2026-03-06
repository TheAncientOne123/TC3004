import React from 'react';
const EmployeeItem = ({ empleado, onDelete, onEdit }) => {
    return (
        <tr className="employee-row">
            <td>{empleado.name}</td>
            <td>{empleado.position || 'No especificada'}</td>
            <td>{empleado.tipoCoche || 'No especificado'}</td>
            <td className="employee-actions">
                <button onClick={onEdit} className="edit-btn">Editar</button>
                <button onClick={onDelete} className="delete-btn">Eliminar</button>
            </td>
        </tr>
    );
};
export default EmployeeItem;