// list-view-router.js
const express = require('express');
const router = express.Router();

// Ruta para listar tareas completas
router.get('/complete', (req, res) => {
  // Lógica para listar tareas completas
});

// Ruta para listar tareas incompletas
router.get('/incomplete', (req, res) => {
  // Lógica para listar tareas incompletas
});

module.exports = router;
