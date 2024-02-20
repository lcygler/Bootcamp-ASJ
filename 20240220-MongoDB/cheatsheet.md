# Obtener documentos

Obtener todos los documentos

```
db.nombre_coleccion.find()
```

Contar todos los documentos

```
db.nombre_coleccion.find().count()
```

Obtener documentos según condicion

```
db.nombre_coleccion.find({ condicion })
```

Obtener documentos (mostrar campo y excluir ID)

```
db.nombre_coleccion.find({}, { _id: 0, campo: 1 })
```

Ordenar documentos por campo de manera descendente

```
db.nombre_coleccion.find({}, { _id: 0, campo: 1 }).sort({ campo: -1 })
```

# Insertar documentos

```
db.nombre_coleccion.insertOne({})
```

```
db.nombre_coleccion.insertMany([{}, {}, {}])
```

# Eliminar documentos

```
db.nombre_coleccion.deleteOne({ condicion })
```

```
db.nombre_coleccion.deleteMany({ condicion })
```

# Actualizar documentos

```
db.nombre_coleccion.updateOne({ condicion }, { $set: { dato: nuevoValor } })
```

```
db.nombre_coleccion.updateMany({ condicion }, { $set: { dato: nuevoValor } })
```

# Comandos

Mostrar lista de DBs

```
show dbs
```

Mostrar DB actual

```
db
```

Mostrar estadísticas

```
db.stats()
```

Cambiar a DB especificada, sino crear

```
use mi_base_de_datos
```

Mostrar colecciones

```
show collections
```

Crear nueva colección

```
db.createCollection("nombre_coleccion")
```

Seleccionar colección

```
db.getCollection("nombre_coleccion")
```

```
db.nombre_coleccion
```

```
db["nombre_coleccion"]
```

Seleccionar colección (con caracteres especiales)

```
db.getCollection("nombre coleccion")
```

```
db["nombre coleccion"]
```

Eliminar colección

```
db.dropDatabase()
```

Eliminar colección especificada

```
db.nombre_coleccion.drop()
```

Limpiar consola

```
cls
```

# Consultas

```
{ campo: valor }
{ campo: { operador: valor } }
```

```
Ej: Buscar todas las personas con nombre igual a "Ana"
{ nombre: "Ana" }
{ nombre: { $eq: "Ana" } }
```

## Operadores de comparación

```
$eq -> Igual que (equal)
$ne -> Distinto que (not equal)
$gt -> Mayor que (greater than)
$gte -> Mayor o igual que (greater than or equal)
$lt -> Menor que (lower than)
$lte -> Menor o igual que (lower than or equal)
```

```
$in -> El valor está dentro de un array
Ej: { categorias: { $in: ["cat1", "cat2"] } }

$nin -> El valor NO está dentro de un array
Ej: { categorias: { $nin: ["cat3", "cat4"] } }
```

## Operadores lógicos

AND

```
{ campo1: valor1, campo2: valor2, campo3: valor3 }
{ $and: [ { campo1: valor1 }, { campo2: valor2 }, { campo3: valor3 } ] }
```

OR

```
{ $or: [ { consulta1 }, { consulta2 } ] }
```

AND - OR

```
{ consulta1, { $or: [ { consulta2 }, { consulta3 } ] } }

```

NOT

```
{ campo: { $not: { $eq: valor } } }
{ campo: { $not: /^p._/ } }
{ campo: { $not: { $regex: /^p._/ } } }
```

## Extras

```
$exists -> Si un campo existe o no
Ej: { email: { $exists: true } }
```

```
$regex: /texto$/ -> Texto al final
Ej: { descripcion: { $regex: /hola$/ } }

$regex: /^texto/ -> Texto al comienzo
Ej: { descripcion: { $regex: /^Lorem/ } }

$regex: /texto/ -> Texto en el medio
Ej: { descripcion: { $regex: /pulgadas/i } }
Opción "i": No distinguir entre mayúsculas y minúsculas
```
