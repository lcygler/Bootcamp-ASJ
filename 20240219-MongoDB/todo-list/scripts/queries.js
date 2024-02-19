// Listar tareas
use("bootcamp-asj");
db.tasks.find({});

// Contar tareas
use("bootcamp-asj");
db.tasks.find({}).count();

// Buscar tareas completadas
use("bootcamp-asj");
db.tasks.find({
  done: true,
});

// Buscar tareas incompletas
use("bootcamp-asj");
db.tasks.find({
  done: false,
});

// Buscar tareas activas
use("bootcamp-asj");
db.tasks.find({
  deleted: false,
});

// Buscar tareas inactivas
use("bootcamp-asj");
db.tasks.find({
  deleted: true,
});
