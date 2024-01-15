package _20240115.ejercicios;

import java.util.Scanner;

public class NumeroOLetra_1 {

	/**
	 * Crear un programa que determine si un string introducido por un usuario
	 * empieza con un número o con una letra.
	 */
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Ingrese un texto: ");
		String input = scanner.nextLine();

		char caracter = input.charAt(0);
		boolean esNumero = caracter >= '0' && caracter <= '9';
		boolean esLetra = (caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z');

		if (esNumero) {
			System.out.println("Comienza con un número");
		} else if (esLetra) {
			System.out.println("Comienza con una letra");
		} else {
			System.out.println("No comienza con un número ni con una letra");
		}

		scanner.close();
	}

}
