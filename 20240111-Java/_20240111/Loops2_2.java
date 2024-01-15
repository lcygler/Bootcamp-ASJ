package _20240111;

import java.util.ArrayList;
import java.util.Scanner;

public class Loops2_2 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		ArrayList<String> seriesList = new ArrayList<>();
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

			String series = generateSeries(a, b, n);
			seriesList.add(series);
			System.out.println();
		}

		for (String series : seriesList) {
			System.out.println(series);
		}

		scanner.close();
	}

	private static String generateSeries(int a, int b, int n) {
		String series = "";
		int result = a;

		for (int i = 0; i < n; i++) {
			result += (Math.pow(2, i) * b);
			series += result + " ";
		}

		return series.trim();
	}
}
