package _20240115.ejercicios;

import java.util.Scanner;

public class ConvertirASCII_1 {

	/*
	 * Dada una palabra ingresada por el usuario (por teclado),
	 * mostrar su equivalente en ASCII (letra por letra).
	 * Ejemplo: Hola => 72 111 108 97
	 * Extra: Agregarle los espacios en blanco.
	 */
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String input;
		int ascii;

		System.out.print("Enter a word: ");
		input = scanner.nextLine();

		System.out.print("ASCII: ");

		for (int i = 0; i < input.length(); i++) {
			ascii = (int) input.charAt(i);
			System.out.print(ascii + " ");
		}

		scanner.close();
	}
}
