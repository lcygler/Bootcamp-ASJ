/* -------------------------- Actualizar documentos ------------------------- */

// 1. Agregar sinopsis a "The Hobbit: An Unexpected Journey"
use("bootcamp-asj");
db.movies.updateOne(
  { title: "The Hobbit: An Unexpected Journey" },
  {
    $set: {
      synopsis:
        "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.",
    },
  }
);

// 2. Agregar sinopsis a "The Hobbit: The Desolation of Smaug"
use("bootcamp-asj");
db.movies.updateOne(
  { title: "The Hobbit: The Desolation of Smaug" },
  {
    $set: {
      synopsis:
        "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
    },
  }
);

// 3. Agregar un actor llamado "Samuel L. Jackson" a la película "Pulp Fiction"
use("bootcamp-asj");
db.movies.updateOne({ title: "Pulp Fiction" }, { $push: { actors: "Samuel L. Jackson" } });
