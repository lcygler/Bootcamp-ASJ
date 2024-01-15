package _20240115.ejercicios;

import java.util.Scanner;

public class SumarParesRango {

	/**
	 * Realizar la suma de todos los números pares entre N y M
	 * donde N y M los ingresa un usuario.
	 */
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int n, m, sum = 0;

		System.out.println("Ingrese el valor de N: ");
		n = scanner.nextInt();

		System.out.println("Ingrese el valor de M: ");
		m = scanner.nextInt();

		for (int i = n; i <= m; i++) {
			if (i % 2 == 0) {
				sum += i;
			}
		}

		System.out.println("La suma de los números pares entre " + n + " y " + m + " es: " + sum);

		scanner.close();
	}

}
