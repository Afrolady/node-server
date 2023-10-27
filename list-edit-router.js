const express = require('express');
const listEditRouter = express.Router();

// Middleware para manejar errores en solicitudes POST
listEditRouter.post('/create', (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send('Bad Request: El cuerpo de la solicitud está vacío.');
  }

  // Agrega validaciones adicionales para los atributos de las tareas según tus requisitos.
  // Por ejemplo, puedes verificar que req.body tenga los atributos requeridos.

  next();
});

// Middleware para manejar errores en solicitudes PUT
listEditRouter.put('/update', (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send('Bad Request: El cuerpo de la solicitud está vacío.');
  }

  // Agrega validaciones adicionales para los atributos de las tareas según tus requisitos.
  // Por ejemplo, puedes verificar que req.body tenga los atributos requeridos.

  next();
});

// Agrega el router "list-edit-router" a tu aplicación principal de Express.

module.exports = listEditRouter;
