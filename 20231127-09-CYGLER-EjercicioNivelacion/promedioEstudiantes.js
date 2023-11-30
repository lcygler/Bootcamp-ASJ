function calcularPromedio(notas) {
  let total = 0;

  for (let i = 0; i < notas.length; i++) {
    total += notas[i];
  }

  return total / notas.length;
}

function promedio(alumnos, estado) {
  // Verificar estado
  if (estado !== 'aprobado' && estado !== 'desaprobado') {
    console.log('El estado debe ser "aprobado" o "desaprobado"');
    return [];
  }

  // Filtrar alumnos por estado
  const filtrados = alumnos.filter((alumno) => {
    const promedio = calcularPromedio(alumno.notas);
    return estado === 'aprobado' ? promedio >= 6 : promedio < 6;
  });

  // Crear nuevo array de alumnos
  const resultado = filtrados.map((alumno) => {
    const nombreCompleto = `${alumno.nombre} ${alumno.apellido}`;
    const promedio = calcularPromedio(alumno.notas);

    return {
      nombreCompleto: nombreCompleto,
      promedio: promedio,
      estado: promedio >= 6 ? 'aprobado' : 'desaprobado',
    };
  });

  return resultado;
}
