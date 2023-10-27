Lista de Tareas - Descripción del Producto

¿Qué es mi producto y para qué sirve?

Nuestro producto es una sencilla pero efectiva aplicación web llamada "Lista de Tareas". Está diseñada para ayudar a las personas a organizar sus tareas diarias de una manera más eficiente y mantener un registro de las actividades pendientes.

La aplicación "Lista de Tareas" le permite a los usuarios crear, editar y marcar tareas como completadas o pendientes. Cada tarea consta de una descripción clara y un estado que indica si la tarea se ha completado o no. Es una herramienta fácil de usar que se ejecuta en un servidor y se puede acceder desde cualquier navegador web.

¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?

Creación de Tareas: Los usuarios pueden crear nuevas tareas en la lista. Esto es útil para anotar cualquier tarea que necesite ser realizada.

Edición de Tareas: Si se comete un error o es necesario cambiar la descripción de una tarea, los usuarios pueden editarla en cualquier momento.

Marca de Tareas Completadas: Los usuarios pueden marcar una tarea como completada una vez que han finalizado la tarea. Esta función les permite realizar un seguimiento de lo que ya han hecho.

Visualización de Tareas Pendientes: La lista muestra claramente las tareas pendientes, lo que facilita a los usuarios ver de un vistazo lo que aún tienen por hacer.

Interfaz Sencilla y Fácil de Usar: La interfaz de usuario es intuitiva y amigable, lo que permite a usuarios de todos los niveles de habilidad utilizar la aplicación sin complicaciones.

Acceso en Cualquier Lugar: Al estar alojado en un servidor, los usuarios pueden acceder a su lista de tareas desde cualquier lugar con una conexión a Internet y un navegador web. Esto es perfecto para mantenerse organizado en casa, en el trabajo o en movimiento.

Registro y Seguimiento de Actividades: Al tener un historial de las tareas realizadas y pendientes, los usuarios pueden realizar un seguimiento de su progreso y garantizar que no se les olvide ninguna tarea importante.

Los usuarios encontrarán valiosa nuestra aplicación "Lista de Tareas" para mejorar su productividad y organización en la vida cotidiana. Ya sea para gestionar tareas personales, proyectos de trabajo o simplemente recordatorios diarios, esta herramienta les permite mantenerse al tanto de lo que deben hacer y reducir el estrés asociado con las actividades pendientes.


Repositorio GitHub: https://github.com/Afrolady/node-server.git 
Rama Review-1: https://github.com/Afrolady/node-server.git

Nuestra aplicación "Lista de Tareas" está diseñada pensando en la simplicidad y la eficacia. ¡Pruebe la aplicación hoy y descubra cómo puede mejorar su productividad y organización!


CODIGO

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



