package _20240111.ej3;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int num;
		boolean isEven;

		do {
			System.out.print("Enter a number (1-100): ");
			num = scanner.nextInt();
			scanner.nextLine();
		} while (num < 1 || num > 100);

		isEven = num % 2 == 0;

		if (!isEven || (isEven && (num >= 6 && num <= 20))) {
			System.out.println("Weird");
		} else {
			System.out.println("Not Weird");
		}

		scanner.close();
	}
}
