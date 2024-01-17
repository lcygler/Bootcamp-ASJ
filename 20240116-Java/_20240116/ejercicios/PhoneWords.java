package _20240116.ejercicios;

import java.util.Scanner;

public class PhoneWords {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		String input;

		System.out.print("Ingrese secuencia: ");
		input = scanner.nextLine();

		// Ejemplo: 222 2 7777 2 => CASA
		decodificarMensaje(input, letras);

		scanner.close();
	}

	private static void decodificarMensaje(String input, String letras) {
		String[] secuencias = input.split(" ");
		String mensaje = "";
		char numero;
		int cantidad;

		for (String secuencia : secuencias) {
			numero = secuencia.charAt(0);
			cantidad = secuencia.length();
			mensaje += decodificarCaracter(numero, cantidad, letras);
		}

		System.out.print("Mensaje decodificado: " + mensaje);
	}

	private static char decodificarCaracter(char numero, int cantidad, String letras) {
		int indice = 0;

		// Ajustar cantidad
		if (((numero >= '2' && numero <= '6') || numero == '8') && cantidad > 3) {
			cantidad = 1 + ((cantidad - 1) % 3);
		} else if ((numero == '7' || numero == '9') && cantidad > 4) {
			cantidad = 1 + ((cantidad - 1) % 4);
		}

		// Actualizar indice
		switch (numero) {
		case '2':
			indice = 0;
			break;
		case '3':
			indice = 3;
			break;
		case '4':
			indice = 6;
			break;
		case '5':
			indice = 9;
			break;
		case '6':
			indice = 12;
			break;
		case '7':
			indice = 15;
			break;
		case '8':
			indice = 19;
			break;
		case '9':
			indice = 22;
			break;
		case '0':
			return ' ';
		default:
			return numero;
		}

		indice += cantidad - 1;

		return letras.charAt(indice);
	}

}
