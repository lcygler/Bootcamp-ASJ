package _20240115.ejercicios;

import java.util.Scanner;

public class PromedioNotas {

	/**
	 * Pedir al usuario que ingrese ¿cuántas notas quiere ingresar?
	 * Según eso, pedir el valor de cada nota (1 al 10) y sacar el promedio.
	 * Aclaración: Hacerlo con FOR, WHILE y DO-WHILE.
	 */
	public static void main(String[] args) {
		int MIN_VALUE = 1;
		int MAX_VALUE = 10;
		Scanner scanner = new Scanner(System.in);
		int i;
		int quantity;
		double value;
		double average;
		double total = 0;

		do {
			System.out.print("Ingrese cantidad de notas: ");
			quantity = scanner.nextInt();
			scanner.nextLine();
		} while (quantity < 1);

		// FOR
		System.out.println("\nFOR");

		for (i = 1; i <= quantity; i++) {
			do {
				System.out.print("Ingrese nota " + i + " (" + MIN_VALUE + "-" + MAX_VALUE + "): ");
				value = scanner.nextDouble();
				scanner.nextLine();
			} while (value < MIN_VALUE || value > MAX_VALUE);

			total += value;
		}

		average = total / quantity;
		System.out.println("El promedio de las notas es: " + average);

		// WHILE
		System.out.println("\nWHILE");

		i = 1;
		total = 0;

		while (i <= quantity) {
			do {
				System.out.print("Ingrese nota " + i + " (" + MIN_VALUE + "-" + MAX_VALUE + "): ");
				value = scanner.nextDouble();
				scanner.nextLine();
			} while (value < MIN_VALUE || value > MAX_VALUE);

			total += value;
			i++;
		}

		average = total / quantity;
		System.out.println("El promedio de las notas es: " + average);

		// DO-WHILE
		System.out.println("\nDO-WHILE");

		i = 1;
		total = 0;

		do {
			do {
				System.out.print("Ingrese nota " + i + " (" + MIN_VALUE + "-" + MAX_VALUE + "): ");
				value = scanner.nextDouble();
				scanner.nextLine();
			} while (value < MIN_VALUE || value > MAX_VALUE);

			total += value;
			i++;
		} while (i <= quantity);

		average = total / quantity;
		System.out.println("El promedio de las notas es: " + average);

		scanner.close();
	}
}
