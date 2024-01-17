package _20240117.ejercicios.ej03;

import java.util.Random;

public class Password {

	private static final int LONGITUD_DEFAULT = 8;
	private int longitud;
	private String password;

	public Password() {
		this.longitud = LONGITUD_DEFAULT;
		this.password = generarPassword(LONGITUD_DEFAULT);
	}

	public Password(int longitud) {
		this.longitud = longitud;
		this.password = generarPassword(longitud);
	}

	public int getLongitud() {
		return longitud;
	}

	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}

	public String getPassword() {
		return password;
	}

	public boolean esFuerte() {
		boolean esFuerte = false;
		int mayusculas = 0, minusculas = 0, numeros = 0;

		for (char c : password.toCharArray()) {
			if (Character.isUpperCase(c)) {
				mayusculas++;
			} else if (Character.isLowerCase(c)) {
				minusculas++;
			} else if (Character.isDigit(c)) {
				numeros++;
			}
		}

		esFuerte = mayusculas > 2 && minusculas > 1 && numeros > 5;

		return esFuerte;
	}

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

}
