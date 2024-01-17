package _20240117.ejercicios.ej04;

public class Persona {

	private String nombre;
	private int edad;
	private int dni;
	private char sexo;
	private double peso;
	private double altura;

	public Persona() {
		this.nombre = "";
		this.edad = 0;
		this.dni = generarDNI();
		this.sexo = 'H';
		this.peso = 0;
		this.altura = 0;
	}

	public Persona(String nombre, int edad, char sexo) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = generarDNI();
		this.sexo = comprobarSexo(sexo);
		this.peso = 0;
		this.altura = 0;
	}

	public Persona(String nombre, int edad, char sexo, double peso, double altura) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = generarDNI();
		this.sexo = comprobarSexo(sexo);
		this.peso = peso;
		this.altura = altura;
	}

	public int calcularIMC() {
		int min = 20;
		int max = 25;
		int resultado;
		double imc;

		if (altura <= 0 || peso <= 0) {
			resultado = -2;
		} else {
			imc = peso / Math.pow(altura, 2);

			if (imc < min) {
				resultado = -1;
			} else if (imc >= min && imc <= max) {
				resultado = 0;
			} else {
				resultado = 1;
			}
		}

		return resultado;
	}

	public boolean esMayorDeEdad() {
		return edad > 18;
	}

	private char comprobarSexo(char sexo) {
		char sexoValidado;
		
		if (sexo != 'H' && sexo != 'M' && sexo != 'h' && sexo != 'm') {
			sexoValidado = 'H';
		} else {
			sexoValidado = Character.toUpperCase(sexo);
		}
		
		return sexoValidado;
	}

	private static int generarDNI() {
		int min = 3000000;
		int max = 80000000;
		return (int) (Math.random() * (max - min) + min);
	}

	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", edad=" + edad + ", dni=" + dni + ", sexo=" + sexo + ", peso=" + peso
				+ ", altura=" + altura + "]";
	}

}
