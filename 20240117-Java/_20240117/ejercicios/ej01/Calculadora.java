package _20240117.ejercicios.ej01;

public class Calculadora {

	private double num1;
	private double num2;

	public Calculadora(double num1, double num2) {
		this.num1 = num1;
		this.num2 = num2;
	}

	public double getNum1() {
		return num1;
	}

	public void setNum1(double num1) {
		this.num1 = num1;
	}

	public double getNum2() {
		return num2;
	}

	public void setNum2(double num2) {
		this.num2 = num2;
	}

	public double calcular(char operador) {
		double resultado = 0;

		switch (operador) {
		case '+':
			resultado = num1 + num2;
			break;
		case '-':
			resultado = num1 - num2;
			break;
		case '*':
			resultado = num1 * num2;
			break;
		case '/':
			if (num2 != 0) {
				resultado = num1 / num2;
			}
			break;
		}

		return resultado;
	}
}
