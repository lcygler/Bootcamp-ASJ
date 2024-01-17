package _20240117.ejercicios.ej01;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		double num1, num2;
		char operador;

		System.out.print("Ingrese número 1: ");
		num1 = scanner.nextInt();

		System.out.print("Ingrese número 2: ");
		num2 = scanner.nextInt();

		do {
			System.out.print("Ingrese operación: ");
			operador = scanner.next().charAt(0);
		} while (operador != '+' && operador != '-' && operador != '*' && operador != '/');

		Calculadora calc = new Calculadora(num1, num2);
		double resultado = calc.calcular(operador);

		if (!(operador == '/' && num2 == 0)) {
			System.out.println(num1 + " " + operador + " " + num2 + " = " + resultado);
		} else {
			System.out.println("Error: No se puede dividir por cero.");
		}

		scanner.close();
	}

}
