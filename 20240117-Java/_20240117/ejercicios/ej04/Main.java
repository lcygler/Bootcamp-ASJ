package _20240117.ejercicios.ej04;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		ArrayList<Persona> personas = new ArrayList<>();

		// Persona 1
		System.out.println("Persona 1");
		System.out.print("Nombre: ");
		String nombre1 = scanner.nextLine();

		System.out.print("Edad: ");
		int edad1 = scanner.nextInt();
		scanner.nextLine();

		System.out.print("Sexo (H/M): ");
		char sexo1 = scanner.next().charAt(0);
		scanner.nextLine();

		System.out.print("Peso: ");
		double peso1 = scanner.nextDouble();
		scanner.nextLine();

		System.out.print("Altura: ");
		double altura1 = scanner.nextDouble();
		scanner.nextLine();

		Persona persona1 = new Persona(nombre1, edad1, sexo1, peso1, altura1);
		personas.add(persona1);

		// Persona 2
		System.out.println("\nPersona 2");
		System.out.print("Nombre: ");
		String nombre2 = scanner.nextLine();

		System.out.print("Edad: ");
		int edad2 = scanner.nextInt();
		scanner.nextLine();

		System.out.print("Sexo (H/M): ");
		char sexo2 = scanner.next().charAt(0);
		scanner.nextLine();

		Persona persona2 = new Persona(nombre2, edad2, sexo2);
		personas.add(persona2);

		// Persona 3
		System.out.println("\nPersona 3");
		System.out.println("Creada con valores por defecto.");
		Persona persona3 = new Persona();
		personas.add(persona3);

		// Mostrar información por persona
		for (Persona persona : personas) {
			mostrar(persona);
		}

		scanner.close();
	}

	private static void mostrar(Persona persona) {
		System.out.println("\n" + persona.toString());

		int imc = persona.calcularIMC();
		switch (imc) {
		case -2:
            System.out.println("No se puede calcular el IMC.");
            break;
		case -1:
			System.out.println("Está por debajo de su peso ideal.");
			break;
		case 0:
			System.out.println("Está en su peso ideal.");
			break;
		case 1:
			System.out.println("Tiene sobrepeso.");
			break;
		}

		if (persona.esMayorDeEdad()) {
			System.out.println("Es mayor de edad.");
		} else {
			System.out.println("Es menor de edad.");
		}
	}
}
