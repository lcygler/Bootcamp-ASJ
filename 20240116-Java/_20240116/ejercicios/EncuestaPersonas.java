package _20240116.ejercicios;

import java.util.Scanner;

public class EncuestaPersonas {

	/**
	 * Ejercicio 7 Queremos realizar una encuesta a 10 personas, en esta encuesta
	 * indicaremos el sexo (1=masculino, 2=femenino), si trabaja (1=si trabaja, 2=
	 * no trabaja) y su sueldo (si tiene un trabajo, sino sera un cero) estará entre
	 * 600 y 2000 (valor entero). Los valores pueden ser generados aleatoriamente.
	 * Calcula y muestra lo siguiente:
	 * 
	 * - Porcentaje de hombres (tengan o no trabajo).
	 * - Porcentaje de mujeres (tengan o no trabajo).
	 * - Porcentaje de hombres que trabajan. Porcentaje de mujeres que trabajan.
	 * - El sueldo promedio de las hombres que trabajan.
	 * - El sueldo promedio de las mujeres que trabajan.
	 * - Usa todos los métodos que veas necesarios, piensa que es aquello que se repite
	 * o que puede ser mejor tenerlo por separado.
	 */
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int cantidadPersonas = 3;
		int cantidadDatos = 3;
		
		int[][] personas = new int[cantidadPersonas][cantidadDatos];

		realizarEncuesta(scanner, personas, cantidadPersonas);
		mostrarResultados(personas, cantidadPersonas);
		
		scanner.close();
	}

	private static void realizarEncuesta(Scanner scanner, int[][] personas, int cantidadPersonas) {
		for (int i = 0; i < cantidadPersonas; i++) {
			System.out.println("Persona " + (i + 1));

			do {
				System.out.print("Ingrese el sexo (1=Masculino, 2=Femenino): ");
				personas[i][0] = scanner.nextInt();
			} while (personas[i][0] != 1 && personas[i][0] != 2);

			do {
				System.out.print("Ingrese situación laboral (1=Trabaja, 2=No trabaja): ");
				personas[i][1] = scanner.nextInt();
			} while (personas[i][1] != 1 && personas[i][1] != 2);

			if (personas[i][1] == 1) {
				do {
					System.out.print("Ingrese el sueldo (entre 600 y 2000): ");
					personas[i][2] = scanner.nextInt();
				} while (personas[i][2] < 600 || personas[i][2] > 2000);
			} else {
				personas[i][2] = 0;
			}

			System.out.println();
		}
	}

	private static void mostrarResultados(int[][] personas, int cantidadPersonas) {
		int cantidadHombres = contarPersonas(personas, 1, cantidadPersonas);
		int cantidadMujeres = contarPersonas(personas, 2, cantidadPersonas);
		int cantidadHombresTrabajan = contarPersonasConTrabajo(personas, 1, cantidadPersonas);
		int cantidadMujeresTrabajan = contarPersonasConTrabajo(personas, 2, cantidadPersonas);

		double porcentajeHombres = calcularPorcentaje(cantidadHombres, cantidadPersonas);
		double porcentajeMujeres = calcularPorcentaje(cantidadMujeres, cantidadPersonas);
		double porcentajeHombresTrabajan = calcularPorcentaje(cantidadHombresTrabajan, cantidadHombres);
		double porcentajeMujeresTrabajan = calcularPorcentaje(cantidadMujeresTrabajan, cantidadMujeres);

		double promedioSueldoHombres = calcularPromedioSueldos(personas, 1, cantidadHombresTrabajan);
		double promedioSueldoMujeres = calcularPromedioSueldos(personas, 2, cantidadMujeresTrabajan);

		System.out.println("\nResultados de la encuesta:");
		System.out.println("Porcentaje de hombres: " + porcentajeHombres + "%");
		System.out.println("Porcentaje de mujeres: " + porcentajeMujeres + "%");
		System.out.println("Porcentaje de hombres que trabajan: " + porcentajeHombresTrabajan + "%");
		System.out.println("Porcentaje de mujeres que trabajan: " + porcentajeMujeresTrabajan + "%");
		System.out.println("Sueldo promedio de hombres que trabajan: " + promedioSueldoHombres);
		System.out.println("Sueldo promedio de mujeres que trabajan: " + promedioSueldoMujeres);
	}

	private static int contarPersonas(int[][] personas, int sexo, int cantidadPersonas) {
		int contador = 0;

		for (int i = 0; i < cantidadPersonas; i++) {
			if (personas[i][0] == sexo) {
				contador++;
			}
		}

		return contador;
	}

	private static int contarPersonasConTrabajo(int[][] personas, int sexo, int cantidadPersonas) {
		int contador = 0;

		for (int i = 0; i < cantidadPersonas; i++) {
			if (personas[i][0] == sexo && personas[i][1] == 1) {
				contador++;
			}
		}

		return contador;
	}

	private static double calcularPorcentaje(int cantidad, int total) {
		double porcentaje = (double) cantidad / total * 100;
		return redondear(porcentaje);
	}

	private static double calcularPromedioSueldos(int[][] personas, int sexo, int cantidadPersonas) {
		int cantPersonasPorSexo = contarPersonas(personas, sexo, cantidadPersonas);
		int sumaSueldos = 0;
		double promedio;

		if (cantPersonasPorSexo == 0) {
			return 0.0;
		}

		for (int i = 0; i < cantidadPersonas; i++) {
			if (personas[i][0] == sexo && personas[i][1] == 1) {
				sumaSueldos += personas[i][2];
			}
		}

		promedio = (double) sumaSueldos / cantPersonasPorSexo;

		return redondear(promedio);
	}
	
	private static double redondear(double valor) {
		return Math.round(valor * 100) / 100; 
	}
}