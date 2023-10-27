const express = require('express');
const router = express.Router();

module.exports = function (tasks) {
  // Middleware para validar parámetros
  const validateParams = (req, res, next) => {
    const param = req.params.validate;

    // Verifica si el parámetro es válido
    if (!isValid(param)) {
      return res.status(400).send('The paramether is not valid');
    }

    next(); // Continuar con la solicitud si el parámetro es válido
  };

  // Ruta para listar las tareas completas
  router.get('/complete', (req, res) => {
    const completedTasks = tasks.filter(task => task.isCompleted);
    res.json(completedTasks);
  });

  // Ruta para listar las tareas incompletas
  router.get('/incomplete', (req, res) => {
    const incompleteTasks = tasks.filter(task => !task.isCompleted);
    res.json(incompleteTasks);
  });

  // Aplicar el middleware a rutas que requieran validación de parámetros
  router.get('/route-with-params/:validate', validateParams);

  return router;
};

// Función para validar el parámetro (personalízala según tus necesidades)
function isValid(param) {
  // Aquí se puede definir los criterios de validación
  if (param.length >= 0 && param.length <= 20) {
    // Verificar si la longitud del parámetro está entre 0 y 20 caracteres
    return true;
  }

  return false;
}
