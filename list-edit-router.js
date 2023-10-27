// list-edit-router.js
const express = require('express');
const router = express.Router();

// Ruta para crear una tarea
router.post('/create', (req, res) => {
  // Lógica para crear una tarea
});

// Ruta para eliminar una tarea
router.delete('/delete/:taskId', (req, res) => {
  // Lógica para eliminar una tarea por su ID
});

// Ruta para actualizar una tarea
router.put('/update/:taskId', (req, res) => {
  // Lógica para actualizar una tarea por su ID
});

module.exports = router;

