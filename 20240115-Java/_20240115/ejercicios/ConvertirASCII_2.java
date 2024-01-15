package _20240115.ejercicios;

import java.util.Scanner;

public class ConvertirASCII_2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		char[] characters;
		int ascii;

		System.out.print("Enter a word: ");
		characters = scanner.nextLine().toCharArray();

		System.out.print("ASCII: ");

		for (char character : characters) {
			ascii = (int) character; // Casteo explícito
			System.out.print(ascii + " ");
		}

		/*
		for (int i = 0; i < characters.length; i++) {
			ascii = characters[i]; // Casteo implícito
			System.out.print(ascii + " ");
		}
		*/
		
		scanner.close();
	}

}
