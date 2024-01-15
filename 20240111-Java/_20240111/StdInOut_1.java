package _20240111;

import java.util.Scanner;

public class StdInOut_1 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter first number: ");
		int firstNumber = scanner.nextInt();

		System.out.print("Enter second number: ");
		int secondNumber = scanner.nextInt();

		System.out.print("Enter third number: ");
		int thirdNumber = scanner.nextInt();

		System.out.println("First number: " + firstNumber);
		System.out.println("Second number: " + secondNumber);
		System.out.println("Third number: " + thirdNumber);

		scanner.close();
	}
}
