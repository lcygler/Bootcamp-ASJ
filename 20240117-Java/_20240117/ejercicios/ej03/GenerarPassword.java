package _20240117.ejercicios.ej03;

import java.util.Random;

public class GenerarPassword {

	private String generarPassword(int longitud) {
		String caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		String password = "";
		int indice;

		for (int i = 0; i < longitud; i++) {
			indice = (int) (Math.random() * caracteres.length());
			password += caracteres.charAt(indice);
		}

		return password;
	}

	private String generarPassword2(int longitud) {
		String password = "";
		char caracter = ' ';
		int tipo;

		for (int i = 0; i < longitud; i++) {
			tipo = (int) (Math.random() * 3);

			switch (tipo) {
			case 0:
				caracter = (char) ((int) (Math.random() * 26) + 'A'); // Mayúsculas
				break;
			case 1:
				caracter = (char) ((int) (Math.random() * 26) + 'a'); // Minúsculas
				break;
			case 2:
				caracter = (char) ((int) (Math.random() * 10) + '0'); // Números
				break;
			}

			password += caracter;
		}

		return password;
	}

	private String generarPassword3(int longitud) {
		Random random = new Random();
		String password = "";
		char caracter = ' ';
		int tipo;

		for (int i = 0; i < longitud; i++) {
			tipo = random.nextInt(3);

			switch (tipo) {
			case 0:
				caracter = (char) (random.nextInt(26) + 'A'); // Mayúsculas
				break;
			case 1:
				caracter = (char) (random.nextInt(26) + 'a'); // Minúsculas
				break;
			case 2:
				caracter = (char) (random.nextInt(10) + '0'); // Números
				break;
			}

			password += caracter;
		}

		return password;
	}
}
