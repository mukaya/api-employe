const express = require('express');
const Router = express.Router();
const EmployeController = require('../controllers/EmployeController');

Router.post("/api/employes", EmployeController.createEmploye());
Router.delete('/api/employes', EmployeController.deleteEmploye());
Router.put('/api/empoyes', EmployeController.updateEmploye());
Router.get('/api/employes', EmployeController.getEmploye());

module.exports = Router;