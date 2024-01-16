package _20240116.ejercicios;

import java.util.Scanner;

public class RotarArray {

	/**
	 * Ejercicio 2: Escribe un programa que lea 15 números por teclado y que los
	 * almacene en un array. Rota los elementos de ese array, es decir, el elemento
	 * de la posición 0 debe pasar a la posición 1, el de la 1 a la 2, etc. El
	 * número que se encuentra en la última posición debe pasar a la posición 0.
	 * Finalmente, muestra el contenido del array.
	 */
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int[] numeros = new int[15];

		ingresar(scanner, numeros);

		System.out.println("\nArray original:");
		mostrar(numeros);

		rotar(numeros);

		System.out.println("\nArray rotado:");
		mostrar(numeros);

		scanner.close();
	}

	private static void ingresar(Scanner scanner, int[] numeros) {
		for (int i = 0; i < numeros.length; i++) {
			System.out.print("Ingresa número " + (i + 1) + ": ");
			numeros[i] = scanner.nextInt();
		}
	}

	private static void mostrar(int[] numeros) {
		for (int numero : numeros) {
			System.out.print(numero + " ");
		}

		System.out.println();
	}

	private static void rotar(int[] numeros) {
		int ultimo = numeros[numeros.length - 1];

		for (int i = numeros.length - 1; i > 0; i--) {
			numeros[i] = numeros[i - 1];
		}

		numeros[0] = ultimo;
	}

}