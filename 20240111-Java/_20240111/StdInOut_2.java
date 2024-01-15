package _20240111;

import java.util.Scanner;

public class StdInOut_2 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("Enter an int: ");
		int intValue = scanner.nextInt();
		scanner.nextLine();
		// int intValue = Integer.parseInt(scanner.nextLine());

		System.out.println("Enter a double: ");
		double doubleValue = scanner.nextDouble();
		scanner.nextLine();
		// double doubleValue = Double.parseDouble(scanner.nextLine());

		System.out.println("Enter a string: ");
		String stringValue = scanner.nextLine();

		System.out.println("String: " + stringValue);
		System.out.println("Double: " + doubleValue);
		System.out.println("Int: " + intValue);

		scanner.close();
	}
}
