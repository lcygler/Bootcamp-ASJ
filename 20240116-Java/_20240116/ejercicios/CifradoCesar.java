package _20240116.ejercicios;

import java.util.Scanner;

public class CifradoCesar {

	/**
	 * Ejercicio 8: Cifrado Cesar Crear un programa que codifique el texto ingresado
	 * por el usuario, utilizando el cifrado de Cesar. Los carácteres no-alfabéticos
	 * no son transformados.
	 * 
	 * El Cifrado de Caesar es uno de los métodos de codificación conocidos más
	 * antiguos. Es muy simple, sólo se cambian las posiciones del alfabeto. La
	 * transformación se denomina ROTn, donde "n" es el valor de cambio de
	 * posiciones y ROT significa "ROTAR", porque es un cambio cíclico.
	 * 
	 * Por ejemplo, ROT2 significa que "a" se vuelve "c", "b" se vuelve "d" y al
	 * final "y" se vuelve "a", y "z" se vuelve "b". La cantidad de transformaciones
	 * posibles depende de la longitud del alfabeto. Para Español sólo llega a 27.
	 */
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String textoOriginal;
		String textoCodificado;
		int valorCambio;
		
		System.out.print("Ingrese texto a codificar: ");
		textoOriginal = scanner.nextLine().trim();

		do {
			System.out.print("Ingrese valor de cambio (1-26): ");
			valorCambio = scanner.nextInt();
		} while (valorCambio < 1 || valorCambio > 26);
	
		textoCodificado = cifrar(textoOriginal, valorCambio);

		System.out.println("\nTexto original: " + textoOriginal);
		System.out.println("Texto codificado: " + textoCodificado);

		scanner.close();
	}

	static String cifrar(String texto, int valorCambio) {
		String textoCodificado = "";
		char caracter;
		char base;
		int codigo;

		for (int i = 0; i < texto.length(); i++) {
			caracter = texto.charAt(i);

			if (Character.isLetter(caracter)) {
				base = Character.isUpperCase(caracter) ? 'A' : 'a';
				codigo = (caracter + valorCambio - base) % 26 + base;
				textoCodificado += (char) codigo;
			} else {
				textoCodificado += caracter;
			}
		}

		return textoCodificado;
	}
}
