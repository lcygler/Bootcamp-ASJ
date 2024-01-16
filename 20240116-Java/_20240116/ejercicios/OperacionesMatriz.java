package _20240116.ejercicios;

import java.util.Scanner;

public class OperacionesMatriz {

	/**
	 * Ejercicio 6: Nos piden crear una matriz de 4×4 de números enteros que
	 * inicialmente esta vacía, nos piden hacer un menú con estas opciones:
	 * 
	 * - Rellenar TODA la matriz de números, debes pedírselo al usuario
	 * - Suma de una fila que se pedirá al usuario (controlar que elija una correcta)
	 * - Suma de una columna que se pedirá al usuario (controlar que elija una correcta)
	 * - Sumar la diagonal principal (ver ejemplo)
	 * - Sumar la diagonal inversa (ver ejemplo)
	 * - La media de todos los valores de la matriz
	 * 
	 * IMPORTANTE: hasta que no se haga la primera opción, el resto de opciones no
	 * se deberán de ejecutar, simplemente mostrar un mensaje donde diga que debes
	 * rellenar la matriz.
	 */
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		int[][] matriz = new int[4][4];
		int opcion;

		do {
			mostrarMenu();
			opcion = scanner.nextInt();

			if (opcion != 1) {
				System.out.println("\nDebe rellenar la matriz primero.\n");
			}
		} while (opcion != 1);

		rellenarMatriz(matriz, scanner);

		do {
			mostrarMenu();
			opcion = scanner.nextInt();

			switch (opcion) {
			case 1:
				rellenarMatriz(matriz, scanner);
				break;
			case 2:
				mostrarMatriz(matriz);
				break;
			case 3:
				System.out.print("\nIngrese el número de fila (1-4): ");
				int fila = scanner.nextInt();
				sumarFila(matriz, fila);
				break;
			case 4:
				System.out.print("\nIngrese el número de columna (1-4): ");
				int columna = scanner.nextInt();
				sumarColumna(matriz, columna);
				break;
			case 5:
				sumarDiagonalPrincipal(matriz);
				break;
			case 6:
				sumarDiagonalInversa(matriz);
				break;
			case 7:
				calcularMedia(matriz);
				break;
			case 8:
				System.out.println("\n¡Hasta luego!");
				break;
			default:
				System.out.println("\nOpción no válida. Inténtelo de nuevo.");
				break;
			}
		} while (opcion != 8);

		scanner.close();
	}

	private static void mostrarMenu() {
		System.out.println("1. Rellenar matriz");
		System.out.println("2. Mostrar matriz");
		System.out.println("3. Sumar fila");
		System.out.println("4. Sumar columna");
		System.out.println("5. Sumar diagonal principal");
		System.out.println("6. Sumar diagonal inversa");
		System.out.println("7. Calcular media");
		System.out.println("8. Salir");
		System.out.print("Seleccione una opción: ");
	}

	private static void rellenarMatriz(int[][] matriz, Scanner scanner) {
		System.out.println();

		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				System.out.print("Ingrese el valor [" + (i + 1) + "][" + (j + 1) + "]: ");
				matriz[i][j] = scanner.nextInt();
			}
		}

		System.out.println("\nMatriz rellenada correctamente.\n");
	}

	private static void mostrarMatriz(int[][] matriz) {
		System.out.println("\nMatriz:");
		
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				System.out.print(matriz[i][j] + " ");
			}

			System.out.println();
		}
		
		System.out.println();
	}

	private static void sumarFila(int[][] matriz, int fila) {
		int suma = 0;

		for (int j = 0; j < matriz[fila - 1].length; j++) {
			suma += matriz[fila - 1][j];
		}

		System.out.println("\nLa suma de la fila " + fila + " es: " + suma + "\n");
	}

	private static void sumarColumna(int[][] matriz, int columna) {
		int suma = 0;

		for (int i = 0; i < matriz.length; i++) {
			suma += matriz[i][columna - 1];
		}

		System.out.println("\nLa suma de la columna " + columna + " es: " + suma + "\n");
	}

	private static void sumarDiagonalPrincipal(int[][] matriz) {
		int suma = 0;

		for (int i = 0; i < matriz.length; i++) {
			suma += matriz[i][i];
		}

		System.out.println("\nLa suma de la diagonal principal es: " + suma + "\n");
	}

	private static void sumarDiagonalInversa(int[][] matriz) {
		int suma = 0;

		for (int i = 0; i < matriz.length; i++) {
			suma += matriz[i][matriz.length - 1 - i];
		}

		System.out.println("\nLa suma de la diagonal inversa es: " + suma + "\n");
	}

	private static void calcularMedia(int[][] matriz) {
		int suma = 0;

		int elementos = matriz.length * matriz[0].length;

		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				suma += matriz[i][j];
			}
		}

		double media = (double) suma / elementos;
		System.out.println("\nLa media de todos los valores es: " + media + "\n");
	}
}