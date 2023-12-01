//* Ejercicio 1
/*
Usando la estructura switch(), creá un programa en el que, si un usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.

En caso de que la palabra sea distinta a la esperada, mostrale un mensaje que le informe que la palabra ingresada es incorrecta.
*/

const palabra = prompt("Ingrese una palabra:").toLowerCase();
let palabraTraducida;

switch (palabra) {
  case "casa":
    palabraTraducida = "house";
    break;
  case "perro":
    palabraTraducida = "dog";
    break;
  case "pelota":
    palabraTraducida = "ball";
    break;
  case "árbol":
    palabraTraducida = "tree";
    break;
  case "genio":
    palabraTraducida = "genius";
    break;
  default:
    alert("La palabra ingresada es incorrecta.");
    break;
}

if (palabraTraducida) {
  alert(`La palabra "${palabra}" en inglés es "${palabraTraducida}".`);
}

//* Ejercicio 2
/*
Usando la estructura switch(), pedile al usuario que valore la película que acaba de ver en:

1. Muy Mala.
2. Mala.
3. Mediocre.
4. Buena.
5. Muy buena.

Acompañá cada valoración con un mensaje que indique si lamentás o te alegrás por su valoración.

Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".
Cuando el usuario haya valorado la película, agradecele su visita.
*/

const valoracion = parseInt(
  prompt("¿Cómo valoras la película?\n1. Muy Mala, 2. Mala, 3. Mediocre, 4. Buena, 5. Muy Buena")
);

let mensaje;

switch (valoracion) {
  case 1:
    alert("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
    break;
  case 2:
    alert("Calificaste la película como Mala. Lo lamentamos.");
    break;
  case 3:
    alert("Calificaste la película como Mediocre.");
    break;
  case 4:
    alert("Calificaste la película como Buena. Nos alegramos.");
    break;
  case 5:
    alert("Calificaste la película como Muy Buena. Nos alegramos mucho.");
    break;
  default:
    alert("Valoración inválida.");
    break;
}

alert("Gracias por tu visita.");
