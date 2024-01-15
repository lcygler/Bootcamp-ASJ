package _20240115.ejercicios;

import java.util.Scanner;

public class ImprimirDibujo_2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int numero;
		int asteriscos;

		do {
			System.out.print("Ingrese cantidad de líneas: ");
			numero = scanner.nextInt();
		} while (numero < 1);

		do {
			System.out.print("Ingrese cantidad de asteríscos: ");
			asteriscos = scanner.nextInt();
		} while (asteriscos < 1);

		for (int i = 1; i <= numero; i++) {
			if (i % 2 == 0) {
				for (int j = 1; j <= asteriscos - 1; j++) {
					System.out.print(" *");
				}
			} else {
				for (int j = 1; j <= asteriscos; j++) {
					System.out.print("* ");
				}
			}

			System.out.println();
		}

		scanner.close();
	}

}
