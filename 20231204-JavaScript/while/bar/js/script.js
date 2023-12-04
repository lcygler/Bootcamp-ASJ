//* Bar
let opcionMenu;
let opcionCarta;
let opcionValida;
let total = 0;
let propina;
let dejarPropina;
let numeroAleatorio;
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

alert("¡Bienvenido/a al bar!");

while (opcionMenu != FIN) {
  do {
    opcionMenu = parseInt(prompt(menuPrincipal));

    opcionValida = opcionMenu >= 1 && opcionMenu <= 4;

    if (!opcionValida) {
      alert("Ingrese una opción valida (1-4).");
    }
  } while (opcionMenu < 1 || opcionMenu > 4);

  switch (opcionMenu) {
    // Mostrar carta
    case 1:
      opcionCarta = parseInt(prompt(carta));

      switch (opcionCarta) {
        case 1:
          total += 4000;
          break;
        case 2:
          total += 3500;
          break;
        case 3:
          total += 2850;
          break;
        case 4:
          total += 760;
          break;
        case 5:
          total += 950;
          break;
        case 6:
          total += 1170;
          break;
      }

      alert("¡Disfrute su pedido!");

      break;

    // Contar chiste
    case 2:
      numeroAleatorio = Math.floor(Math.random() * 3) + 1;

      switch (numeroAleatorio) {
        case 1:
          alert(
            "-Mozo, mozo, la carne sírvamela cruda.\n" +
              "-¿Como cuánto de cruda, señor?\n" +
              "-Que la pinchés y le duela."
          );
          break;

        case 2:
          alert(
            "- Camarero! ¡ya le he pedido cien veces un vaso de agua!\n" +
              "- ¡Cien vasos de agua para la Mesa 3!"
          );
          break;

        case 3:
          alert(
            "- Camarero! ¡hay una mosca en mi sopa!\n" + "- Perdón ¿cuántas moscas pidió el señor?"
          );

          break;
      }

      alert("¡Espero que te hayas reído!");
      break;

    // Estado día
    case 3:
      numeroAleatorio = Math.floor(Math.random() * 3) + 1;

      switch (numeroAleatorio) {
        case 1:
          alert("¡El día de hoy está muy soleado!");
          break;

        case 2:
          alert("El día está nublado, ¡espero que hayas traído un paraguas!");
          break;

        case 3:
          alert("El día está bastante fresco, ¡mejor abrigarse!");
          break;
      }

      break;

    // Pedir cuenta
    case 4:
      if (total !== 0) {
        dejarPropina = prompt("¿Querés dejar propina? (S/N):").trim().toLowerCase();

        if (dejarPropina === "s") {
          do {
            propina = parseInt(prompt("¿Cuánta propina querés dejar?:"));
          } while (propina < 0);

          total += propina;
        }

        alert("El total de la cuenta es: $" + total.toFixed(2));
        opcionMenu = FIN;
      } else {
        alert("No has pedido nada. ¿Por qué no pruebas el menú del día?");
      }

      break;
  }
}

alert("¡Gracias por su visita. Hasta luego!");
