// Eliminar datos
// use("bootcamp-asj");
// db.personas.deleteMany({});
// db.getCollection("personas").deleteMany({});

// Insertar datos
// use("bootcamp-asj");
// const data = [{}, {}, {}];
// db.personas.insertMany(data);

// Listar personas
use("bootcamp-asj");
db.personas.find({});

// Contar personas
use("bootcamp-asj");
db.personas.find({}).count();

// 1.
use("bootcamp-asj");
db.personas.find({
  nombre: "Andrea",
});

// 2.
use("bootcamp-asj");
db.personas.find({
  nombre: { $ne: "Peter" },
});

// 3.
use("bootcamp-asj");
db.personas.find({
  edad: { $gt: 18 },
});

// 4.
use("bootcamp-asj");
db.personas.find({
  edad: { $gte: 18 },
  talle: "M",
});

// 5.
use("bootcamp-asj");
db.personas.find({
  edad: { $lt: 18 },
  genero: "F",
});

// 6.
use("bootcamp-asj");
db.personas.find({
  edad: { $lt: 18 },
  genero: "F",
  talle: { $ne: "L" },
});

// 7.
use("bootcamp-asj");
db.personas.find({
  nombre: { $regex: /a$/i },
  talle: "S",
});

// 8.
use("bootcamp-asj");
db.personas.find({
  apellido: { $regex: /^P/i },
  fec_nac: { $regex: /1992/ },
  idioma: { $ne: "Italian" },
});

// 9.
use("bootcamp-asj");
db.personas.find({
  titulo: { $regex: /r/i },
  fec_nac: { $regex: /\/12\// },
});
