//* Ejercicio Bar
let opcionMenu;
let totalCuenta = 0;
const FIN = -1;

const menuPrincipal =
  "Ingrese una opción:\n" +
  "1. Me gustaría pedir algo\n" +
  "2. ¿Me contarías un chiste?\n" +
  "3. ¿Cómo está el día?\n" +
  "4. ¿Me traerías la cuenta?";

const carta =
  "Seleccione un producto:\n" +
  "1. Pizza ($4000)\n" +
  "2. Hamburguesa ($3500)\n" +
  "3. Ensalada ($2850)\n" +
  "4. Agua ($760)\n" +
  "5. Coca-Cola ($950)\n" +
  "6. Cerveza ($1170)";

const mostrarMensaje = (mensaje) => alert(mensaje);

const ingresarTexto = (mensaje) => {
  let texto = prompt(mensaje).trim().toLowerCase();
  return texto;
};

const ingresarNumero = (mensaje) => {
  let numero;

  do {
    numero = parseInt(prompt(mensaje));
  } while (isNaN(numero));

  return numero;
};

const mostrarCarta = () => {
  let opcionCarta = ingresarNumero(carta);

  switch (opcionCarta) {
    case 1:
      totalCuenta += 4000;
      break;
    case 2:
      totalCuenta += 3500;
      break;
    case 3:
      totalCuenta += 2850;
      break;
    case 4:
      totalCuenta += 760;
      break;
    case 5:
      totalCuenta += 950;
      break;
    case 6:
      totalCuenta += 1170;
      break;
  }

  mostrarMensaje("¡Disfrute su pedido!");
};

const contarChiste = () => {
  let numeroAleatorio = Math.floor(Math.random() * 3) + 1;

  switch (numeroAleatorio) {
    case 1:
      mostrarMensaje(
        "-Mozo, mozo, la carne sírvamela cruda.\n" +
          "-¿Como cuánto de cruda, señor?\n" +
          "-Que la pinchés y le duela."
      );
      break;

    case 2:
      mostrarMensaje(
        "- Camarero! ¡ya le he pedido cien veces un vaso de agua!\n" +
          "- ¡Cien vasos de agua para la Mesa 3!"
      );
      break;

    case 3:
      mostrarMensaje(
        "- Camarero! ¡hay una mosca en mi sopa!\n" + "- Perdón ¿cuántas moscas pidió el señor?"
      );
      break;
  }

  mostrarMensaje("¡Espero que te hayas reído!");
};

const obtenerEstadoDia = () => {
  let numeroAleatorio = Math.floor(Math.random() * 3) + 1;

  switch (numeroAleatorio) {
    case 1:
      mostrarMensaje("¡El día de hoy está muy soleado!");
      break;

    case 2:
      mostrarMensaje("El día está nublado, ¡espero que hayas traído un paraguas!");
      break;

    case 3:
      mostrarMensaje("El día está bastante fresco, ¡mejor abrigarse!");
      break;
  }
};

const pedirCuenta = () => {
  let propina;
  let dejarPropina;

  if (totalCuenta !== 0) {
    dejarPropina = ingresarTexto("¿Querés dejar propina? (S/N):");

    if (dejarPropina === "s") {
      propina = ingresarNumero("¿Cuánta propina querés dejar?:");
      totalCuenta += propina;
    }

    mostrarMensaje("El totalCuenta de la cuenta es: $" + totalCuenta.toFixed(2));
    opcionMenu = FIN;
  } else {
    mostrarMensaje("No has pedido nada. ¿Por qué no pruebas el menú del día?");
  }
};

// INICIO
mostrarMensaje("¡Bienvenido/a al bar!");

while (opcionMenu !== FIN) {
  do {
    opcionMenu = ingresarNumero(menuPrincipal);

    if (opcionMenu < 1 || opcionMenu > 4) {
      mostrarMensaje("Ingrese una opción valida (1-4).");
    }
  } while (opcionMenu < 1 || opcionMenu > 4);

  switch (opcionMenu) {
    case 1:
      mostrarCarta();
      break;

    case 2:
      contarChiste();
      break;

    case 3:
      obtenerEstadoDia();
      break;

    case 4:
      pedirCuenta();
      break;
  }
}

mostrarMensaje("¡Gracias por su visita. Hasta luego!");
