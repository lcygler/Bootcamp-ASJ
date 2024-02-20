/* --------------------------- Eliminar documentos -------------------------- */

// 1. Eliminar la película "Pee Wee Herman's Big Adventure"
use("bootcamp-asj");
db.movies.deleteOne({ title: "Pee Wee Herman's Big Adventure" });

// 2. Eliminar la película "Avatar"
use("bootcamp-asj");
db.movies.deleteOne({ title: "Avatar" });

// 3. Eliminar todas las películas
use("bootcamp-asj");
db.movies.deleteMany({});

//* Eliminar colecciones
// 1. Eliminar una colección llamada "productos"
use("bootcamp-asj");
db.productos.drop();
