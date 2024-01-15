package _20240110;

public class Introduccion {

	public static void main(String[] args) {
		System.out.println("Hola!");

		// Declaración de variables
		int edad;
		float precio;
		double total;
		boolean estado;
		char letra;
		String nombre;

		// Inicialización de variables
		edad = 28;
		precio = 9.99f;
		total = 99.99;
		estado = true;
		letra = 'L';
		nombre = "Leandro";

		// Uso de variables
		System.out.println("Nombre: " + nombre);
		System.out.println("Edad: " + edad);
		System.out.println("Estado: " + estado);
		System.out.println("Precio: " + precio);
		System.out.println("Total: " + total);
		System.out.println("Letra: " + letra);

		// Estructuras condicionales
		if (edad > 18) {
			System.out.println("Es mayor de edad");
		} else {
			System.out.println("Es menor de edad");
		}
	}

}
