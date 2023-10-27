const express = require('express');
const app = express();
require('dotenv').config(); // Cargar variables de entorno


// Require los routers
const listViewRouter = require('../routes/list-view-router');
const listEditRouter = require('../routes/list-edit-router');

// Middleware para procesar el cuerpo JSON de las solicitudes
app.use(express.json());

// Implementa los routers en las rutas principales
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);



// Otras rutas que puedas tener en app.js sin cambios
app.get('/', (req, res) => {
  res.status(200).send('Bienvenido a Leydi Express');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
