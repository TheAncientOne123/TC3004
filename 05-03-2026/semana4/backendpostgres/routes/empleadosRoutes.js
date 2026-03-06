const express = require('express');
const empleadosController = require('../controllers/empleadosController');
const router = express.Router();
// Rutas para los empleados
router.get('/', empleadosController.getAllEmployees);
router.get('/:id', empleadosController.getEmployeeById);
router.post('/', empleadosController.createEmployee);
router.put('/:id', empleadosController.updateEmployee);
router.delete('/:id', empleadosController.deleteEmployee);
module.exports = router;
