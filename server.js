const express = require('express');
const app = express();

// Require los routers
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

// Implementa los routers en las rutas principales
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

// Resto de la configuración y el servidor Express
// ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
