// Delete data
// use("bootcamp-asj");
// db.people.deleteMany({});
// db.getCollection("people").deleteMany({});

// Insert data
// use("bootcamp-asj");
// const data = [{}, {}, {}];
// db.people.insertMany(data);

// List people
use("bootcamp-asj");
db.people.find({});

// Count people
use("bootcamp-asj");
db.people.find({}).count();

// 1.
use("bootcamp-asj");
db.people.find({
  nombre: "Andrea",
});

// 2.
use("bootcamp-asj");
db.people.find({
  nombre: { $ne: "Peter" },
});

// 3.
use("bootcamp-asj");
db.people.find({
  edad: { $gt: 18 },
});

// 4.
use("bootcamp-asj");
db.people.find({
  edad: { $gte: 18 },
  talle: "M",
});

// 5.
use("bootcamp-asj");
db.people.find({
  edad: { $lt: 18 },
  genero: "F",
});

// 6.
use("bootcamp-asj");
db.people.find({
  edad: { $lt: 18 },
  genero: "F",
  talle: { $ne: "L" },
});

// 7.
use("bootcamp-asj");
db.people.find({
  nombre: { $regex: /a$/i },
  talle: "S",
});

// 8.
use("bootcamp-asj");
db.people.find({
  apellido: { $regex: /^P/i },
  fec_nac: { $regex: /1992/ },
  idioma: { $ne: "Italian" },
});

// 9.
use("bootcamp-asj");
db.people.find({
  titulo: { $regex: /r/i },
  fec_nac: { $regex: /\/12\// },
});
