package _20240111.ej4;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int num;

		do {
			System.out.print("Enter a number (2-20): ");
			num = scanner.nextInt();
			scanner.nextLine();
		} while (num < 2 || num > 20);

		for (int i = 1; i <= 10; i++) {
			int result = num * i;
			System.out.println(num + " x " + i + " = " + result);
		}
		
		scanner.close();
	}
}
