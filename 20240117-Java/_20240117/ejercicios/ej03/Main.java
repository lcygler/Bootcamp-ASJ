package _20240117.ejercicios.ej03;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		ArrayList<Password> passwords = new ArrayList<>();
		int cantidad;
		int longitud;

		System.out.print("Ingrese cantidad de contraseñas: ");
		cantidad = scanner.nextInt();
		scanner.nextLine();
		System.out.println();

		for (int i = 0; i < cantidad; i++) {
			Password password;

			System.out.print("Ingrese longitud " + (i + 1) + ": ");
			longitud = scanner.nextInt();
			scanner.nextLine();

			if (longitud < 1) {
				password = new Password();
			} else {
				password = new Password(longitud);
			}

			passwords.add(password);
		}

		System.out.println();

		for (int i = 0; i < passwords.size(); i++) {
			Password password = passwords.get(i);

			System.out.print("Contraseña " + (i + 1) + ": " + password.getPassword());

			if (password.esFuerte()) {
				System.out.println(" | FUERTE");
			} else {
				System.out.println(" | DEBIL");
			}
		}

		scanner.close();
	}
}