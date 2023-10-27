const express = require('express');
const router = express.Router();
const validateMethod = require('../middlewares/method-validator'); // Importa el middleware 


module.exports = function (tasks) {

// Middleware para manejar errores de solicitud POST y PUT
const handleErrors = (req, res, next) => {
  if (req.method === 'POST' && (!req.body || Object.keys(req.body).length === 0)) {
    return res.status(400).json({ message: 'The body in the Post request is empty' });
  }

  if (req.method === 'POST' && (!req.body.id || !req.body.otroAtributo)) {
    return res.status(400).json({ message: 'Invalid Information or missing atributes to create the task' });
  }

  if (req.method === 'PUT' && (!req.body || Object.keys(req.body).length === 0)) {
    return res.status(400).json({ message: 'The body in the PUT request is empty' });
  }

  if (req.method === 'PUT' && (!req.body.id || !req.body.otherAtribute)) {
    return res.status(400).json({ message: 'Invalid Information or missing atributes to update the task' });
  }

  next(); // Continuar con la solicitud si no se encontraron errores
}; 

// Aplicar el middleware a nivel de aplicación
router.use(validateMethod);

// Aplicar el middleware a todas las rutas
router.use(handleErrors);

// Ruta para crear una tarea (POST)
router.post('/create', (req, res) => {
// Resto del código para crear una tarea
const newTask = { ...req.body };

// Verifica si la nueva tarea tiene un ID válido
if (!newTask.id) {
  res.status(400).json({ message: 'The task ID is mandatory' });
  return;
}

// Agrega la nueva tarea
  tasks.push(newTask);

  // Responde con la nueva tarea
  res.json(newTask);
});

// Ruta para eliminar una tarea por ID (DELETE)
router.delete('/delete/:id', (req, res) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.json({ message: 'The task has been deleted successfully' });
  } else {
    res.status(404).json({ message: 'The task was not found' });
  }
});


// Ruta para actualizar una tarea por ID (PUT)
router.put('/update/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body; // Se espera un objeto con los detalles actualizados de la tarea
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask;
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: 'The task was not found' });
  }
});

return router;
};
// Agrega el router "list-edit-router" a tu aplicación principal de Express.


