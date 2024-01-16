package _20240116.ejercicios;

import java.util.Scanner;

public class SumaMatriz {

	/**
	 * Ejercicio 5: Dada la matriz anterior, realizar la suma de una columna o fila
	 * aleatoria (preguntar al usuario que desea sumar, si una fila o una columna, y
	 * cual de ellas). Extra: mostrar el resultado al final de la fila/columna
	 * correspondiente.
	 */
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		int filas = 3;
		int columnas = 3;
		int min = 0;
		int max = 100;
		char opcion;
		int indice;

		int[][] matriz = new int[filas][columnas];
		int[][] nuevaMatriz = null;

		cargarMatriz(matriz, min, max);

		System.out.println("Matriz original:");
		mostrarMatriz(matriz);

		do {
			System.out.print("\n¿Desea sumar una fila o columna? (F/C): ");
			opcion = scanner.next().toLowerCase().charAt(0);
		} while (opcion != 'f' && opcion != 'c');

		if (opcion == 'f') {
			do {
				System.out.print("\nIngrese el número de fila (1-" + filas + "): ");
				indice = scanner.nextInt();
			} while (indice < 1 || indice > filas);

			nuevaMatriz = sumarFila(matriz, indice);
		} else {
			do {
				System.out.print("\nIngrese el número de columna (1-" + columnas + "): ");
				indice = scanner.nextInt();
			} while (indice < 1 || indice > columnas);

			nuevaMatriz = sumarColumna(matriz, indice);
		}

		System.out.println("\nMatriz modificada:");
		mostrarMatriz(nuevaMatriz);

		scanner.close();
	}

	private static void cargarMatriz(int[][] matriz, int min, int max) {
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				int numero;

				do {
					numero = generarRandom(min, max);
				} while (existeEnMatriz(matriz, numero));

				matriz[i][j] = numero;
			}
		}
	}

	private static void mostrarMatriz(int[][] matriz) {
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				System.out.print(matriz[i][j] + " ");
			}
			
			System.out.println();
		}
	}

	private static boolean existeEnMatriz(int[][] matriz, int numero) {
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				if (matriz[i][j] == numero) {
					return true;
				}
			}
		}
		
		return false;
	}

	private static int[][] sumarFila(int[][] matriz, int numeroFila) {
		int filas = matriz.length;
		int columnas = matriz[0].length;

		int[][] nuevaMatriz = new int[filas][columnas + 1];

		// Copiar matriz
		for (int i = 0; i < filas; i++) {
			for (int j = 0; j < columnas; j++) {
				nuevaMatriz[i][j] = matriz[i][j];
			}
		}

		// Calcular suma
		int suma = 0;

		for (int j = 0; j < columnas; j++) {
			suma += matriz[numeroFila - 1][j];
		}

		nuevaMatriz[numeroFila - 1][columnas] = suma;

		return nuevaMatriz;
	}

	private static int[][] sumarColumna(int[][] matriz, int numeroColumna) {
		int filas = matriz.length;
		int columnas = matriz[0].length;

		int[][] nuevaMatriz = new int[filas + 1][columnas];

		// Copiar matriz
		for (int i = 0; i < filas; i++) {
			for (int j = 0; j < columnas; j++) {
				nuevaMatriz[i][j] = matriz[i][j];
			}
		}

		// Calcular suma
		int suma = 0;

		for (int i = 0; i < filas; i++) {
			suma += matriz[i][numeroColumna - 1];
		}

		nuevaMatriz[filas][numeroColumna - 1] = suma;

		return nuevaMatriz;
	}

	private static int generarRandom(int min, int max) {
		return (int) (Math.random() * (max - min + 1) + min);
	}

}
