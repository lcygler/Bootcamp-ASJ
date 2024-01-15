package _20240115.ejercicios;

import java.util.Scanner;

public class NumeroPerfecto {

	/*
	 * Crear un programa que determine si un número es perfecto o no, (se dice que
	 * un número es perfecto si el número es igual a la suma de sus divisores
	 * positivos, excluido él mismo., Ejemplos 6 = 1 + 2 + 3)
	 */
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int numero, sumaDivisores = 0;

		System.out.println("Ingrese un número: ");
		numero = scanner.nextInt();

		for (int i = 1; i < numero; i++) {
			if (numero % i == 0) {
				sumaDivisores += i;
			}
		}

		if (numero == sumaDivisores) {
			System.out.println("El número " + numero + " es perfecto");
		} else {
			System.out.println("El número " + numero + " no es perfecto");
		}

		scanner.close();
	}

}
