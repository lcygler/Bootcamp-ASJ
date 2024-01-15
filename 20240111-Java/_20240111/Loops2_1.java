package _20240111;

import java.util.Scanner;

public class Loops2_1 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int q;

		do {
			System.out.print("Enter number of queries: ");
			q = scanner.nextInt();
			scanner.nextLine();
		} while (q < 0 || q > 500);
		
		System.out.println();
		
		for (int i = 0; i < q; i++) {
			int a, b, n;

			do {
				System.out.print("Enter 'a' value: ");
				a = scanner.nextInt();
				scanner.nextLine();
			} while (a < 0 || a > 50);

			do {
				System.out.print("Enter 'b' value: ");
				b = scanner.nextInt();
				scanner.nextLine();
			} while (b < 0 || b > 50);

			do {
				System.out.print("Enter 'n' value: ");
				n = scanner.nextInt();
				scanner.nextLine();
			} while (n < 1 || n > 15);

			printSeries(a, b, n);
			System.out.println();
		}

		scanner.close();
	}

	private static void printSeries(int a, int b, int n) {
		int result = a;
		
		for (int i = 0; i < n; i++) {
			result += (Math.pow(2, i) * b);
			System.out.print(result + " ");
		}

		System.out.println();
	}
}
