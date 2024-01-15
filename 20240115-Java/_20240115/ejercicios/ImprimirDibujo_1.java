package _20240115.ejercicios;

import java.util.Scanner;

public class ImprimirDibujo_1 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int numero;

		do {
			System.out.print("Ingrese cantidad de líneas: ");
			numero = scanner.nextInt();
		} while (numero < 1);

		for (int i = 1; i <= numero; i++) {
			if (i % 2 == 0) {
				System.out.println(" * * * * * * *");
			} else {
				System.out.println("* * * * * * * *");
			}
		}

		scanner.close();
	}

}
