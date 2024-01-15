package _20240115.ejercicios;

import java.util.Scanner;

public class ValidarTriangulo {

	/*
	 * Crear un programa donde se introduzcan los tres ángulos internos de un
	 * triángulo y se determine si el triángulo es válido o no.
	 */
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int angulo1, angulo2, angulo3;

		do {
			System.out.print("Ingrese ángulo 1: ");
			angulo1 = scanner.nextInt();
		} while (angulo1 < 0);

		do {
			System.out.print("Ingrese ángulo 2: ");
			angulo2 = scanner.nextInt();
		} while (angulo2 < 0);

		do {
			System.out.print("Ingrese ángulo 3: ");
			angulo3 = scanner.nextInt();
		} while (angulo3 < 0);

		boolean isValid = (angulo1 + angulo2 + angulo3) == 180;

		if (isValid) {
			System.out.println("¡El triángulo es válido!");
		} else {
			System.out.println("¡El triángulo no es válido!");
		}

		scanner.close();
	}
}
