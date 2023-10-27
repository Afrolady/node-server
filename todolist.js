const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask(indicador, descripcion) {
  tasks.push({ indicador, descripcion, completada: false });
  console.log('Tarea añadida.');
}

function deleteTask(indicador) {
  const index = tasks.findIndex(task => task.indicador === indicador);
  if (index !== -1) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada.');
  } else {
    console.log('Tarea no encontrada.');
  }
}

function completeTask(indicador) {
  const task = tasks.find(task => task.indicador === indicador);
  if (task) {
    task.completada = true;
    console.log('Tarea completada.');
  } else {
    console.log('Tarea no encontrada.');/////
  }
}

rl.question('¿Qué acción deseas realizar? (add/delete/complete/quit): ', (action) => {
  if (action === 'quit') {
    rl.close();
  } else if (action === 'add') {
    rl.question('Indicador de la tarea: ', (indicador) => {
      rl.question('Descripción de la tarea: ', (descripcion) => {
        addTask(indicador, descripcion);
        rl.close();
      });
    });
  } else if (action === 'delete') {
    rl.question('Indicador de la tarea a eliminar: ', (indicador) => {
      deleteTask(indicador);
      rl.close();
    });
  } else if (action === 'complete') {
    rl.question('Indicador de la tarea a completar: ', (indicador) => {
      completeTask(indicador);
      rl.close();
    });
  } else {
    console.log('Acción no válida.');
    rl.close();
  }
});