package _20240115;

public class Estructuras {

	public static void main(String[] args) {
		// Estructuras de condición
		// If-Else
		System.out.println("If-Else");
		int a = 100;
		int b = 200;

		if (a < b) {
			System.out.println("Verdadero");
		} else {
			System.out.println("Falso");
		}

		// Switch
		System.out.println("\nSwitch");
		char caracter = 'a';

		switch (caracter) {
		case 'a':
			System.out.println("La variable es a");
			break;
		case 'b':
			System.out.println("La variable es b");
			break;
		default:
			System.out.println("La variable es distinta");
			break;
		}

		// Ternario
		System.out.println("\nTernario");
		boolean status = false;
		System.out.println(status ? "Verdadero" : "Falso");

		// Estructuras de control
		// For
		System.out.println("\nFor");

		for (byte i = 0; i <= 5; i++) {
			// System.out.println("Línea " + i);
			System.out.print(i + " ");
		}

		System.out.println();

		// While
		System.out.println("\nWhile");

		byte i = 0;

		// (!status) <=> (status == false)
		while (!status) {
			System.out.println(i++);

			if (i == 8) {
				status = true;
			}
		}

		// Do-While
		System.out.println("\nDo-While");

		i = 0;
		status = true;

		do {
			System.out.print(i++ + " ");

			if (i == 8) {
				status = true;
			}
		} while (!status);

	}

}
