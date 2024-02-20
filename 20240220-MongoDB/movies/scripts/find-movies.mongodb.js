/* ---------------------------- Buscar documentos --------------------------- */

// 1. Obtener todos los documentos
use("bootcamp-asj");
db.movies.find({});

// 2. Obtener documentos con writer igual a "Quentin Tarantino"
use("bootcamp-asj");
db.movies.find({ writer: "Quentin Tarantino" });

// 3. Obtener documentos con actors que incluyan a "Brad Pitt"
use("bootcamp-asj");
db.movies.find({ actors: "Brad Pitt" });

// 4. Obtener documentos con franchise igual a "The Hobbit"
use("bootcamp-asj");
db.movies.find({ franchise: "The Hobbit" });

// 5. Obtener todas las películas de los 90s
use("bootcamp-asj");
db.movies.find({ year: { $gte: 1990, $lt: 2000 } });

// 6. Obtener las películas estrenadas entre el año 2000 y 2010
use("bootcamp-asj");
db.movies.find({ year: { $gte: 2000, $lte: 2010 } });

// 7. Obtener todos los documentos, mostrar sólo el título de la película,
// ordenar por título ascendentemente y limitar el resultado a sólo 4 resultados,
// saltando los 2 primeros
use("bootcamp-asj");
db.movies.find({}, { _id: 0, title: 1 }).sort({ title: 1 }).skip(2).limit(4);

/* ---------------------------- Buscar por texto ---------------------------- */

// 1. Encontrar las películas que en la sinopsis contengan la palabra "Bilbo" (mostrar sólo el título y año)
use("bootcamp-asj");
db.movies.find({ synopsis: { $regex: /Bilbo/i } }, { _id: 0, title: 1, year: 1 });

// 2. Encontrar las películas que en la sinopsis contengan la palabra "Gandalf"
use("bootcamp-asj");
db.movies.find({ synopsis: { $regex: /Gandalf/i } });

// 3. Encontrar las películas que en la sinopsis contengan la palabra "Bilbo" y no la palabra "Gandalf"
use("bootcamp-asj");
db.movies.find({ synopsis: { $regex: /Bilbo/i, $not: /Gandalf/i } });

// 4. Encontrar las películas que en la sinopsis contengan la palabra "dwarves" o "hobbit"
use("bootcamp-asj");
db.movies.find({ synopsis: { $regex: /dwarves|hobbit/i } });

// 5. Encontrar las películas que en la sinopsis contengan la palabra "gold" y "dragon" (ordenar por año de forma descendente)
use("bootcamp-asj");
db.movies
  .find({
    synopsis: {
      $regex: /gold.*dragon|dragon.*gold/i,
    },
  })
  .sort({ year: -1 });
