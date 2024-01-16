package _20240116.ejercicios;

public class OrdenarNumeros {

	/**
	 * Ejercicio 3: Escribe un programa que genere 20 números enteros aleatorios
	 * entre 0 y 100 y que los almacene en un array. El programa debe ser capaz de
	 * pasar todos los números pares a las primeras posiciones del array (del 0 en
	 * adelante) y todos los números impares a las celdas restantes. Utiliza arrays
	 * auxiliares si es necesario.
	 */
	public static void main(String[] args) {
		int[] numeros = new int[20];
		int[] pares = new int[numeros.length];
		int[] impares = new int[numeros.length];
		int indicePares = 0;
		int indiceImpares = 0;

		for (int i = 0; i < numeros.length; i++) {
			numeros[i] = generarRandom(0, 100);
		}

		System.out.println("Array original:");
		mostrar(numeros);

		// Separar pares e impares
		for (int i = 0; i < numeros.length; i++) {
			if (numeros[i] % 2 == 0) {
				pares[indicePares] = numeros[i];
				indicePares++;
			} else {
				impares[indiceImpares] = numeros[i];
				indiceImpares++;
			}
		}

		// Actualizar array original
		for (int i = 0; i < indicePares; i++) {
			numeros[i] = pares[i];
		}

		for (int i = 0; i < indiceImpares; i++) {
			numeros[indicePares + i] = impares[i];
		}

		System.out.println("\nArray modificado:");
		mostrar(numeros);
	}

	private static void mostrar(int[] numeros) {
		for (int numero : numeros) {
			System.out.print(numero + " ");
		}

		System.out.println();
	}

	private static int generarRandom(int min, int max) {
		return (int) (Math.random() * (max - min + 1) + min);
	}
}
