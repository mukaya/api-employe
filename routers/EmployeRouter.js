const express = require('express');
const Router = express.Router();
const EmployeController = require('../controllers/EmployeController');

Router.post("/api/employes", EmployeController.createEmploye());
Router.post('/api/employes/delete', EmployeController.deleteEmploye());
Router.post('/api/empoyes/edit', EmployeController.updateEmploye());
Router.get('/api/employes', EmployeController.getEmploye());

module.exports = Router;