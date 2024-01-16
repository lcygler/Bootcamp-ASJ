package _20240116.ejercicios;

public class MatrizAleatoria {

	/**
	 * Ejercicio 4: Generar una matriz de 3×3 con números aleatorios sin repetirse.
	 */
	public static void main(String[] args) {
		int filas = 3;
		int columnas = 3;
		int min = 0;
		int max = 100;

		int[][] matriz = new int[filas][columnas];

		cargarMatriz(matriz, min, max);
		mostrarMatriz(matriz);
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

	private static int generarRandom(int min, int max) {
		return (int) (Math.random() * (max - min + 1) + min);
	}

}
