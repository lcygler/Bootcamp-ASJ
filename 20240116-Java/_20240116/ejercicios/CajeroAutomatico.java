package _20240116.ejercicios;

import java.util.Scanner;

public class CajeroAutomatico {

	/**
	 * ATM (cajero automático): Crear un programa que tenga un dinero inicial.
	 * El programa también deberá contar con un menú con las siguientes opciones:
	 * 
	 * - EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer
	 * es menor o igual al saldo actual, restar el dinero extraído al saldo
	 * - DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
	 * - CONSULTAR SALDO: debe mostrar el saldo actual
	 * - VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
	 * - SALIR: debe terminar la ejecución del programa.
	 * 
	 * El programa debe mostrar el menú de opciones, y permitir ingresar una opción.
	 * Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se
	 * elige SALIR, debe terminar el programa. Si se elige alguna de las otras
	 * opciones, debe realizar las acciones correspondientes, y una vez terminada,
	 * volver al menú de opciones. Las acciones de EXTRAER y DEPOSITAR y CONSULTAR
	 * SALDO deben registrarse cada vez que se realicen para poder consultarse luego.
	 */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder movimientos = new StringBuilder();
        double saldo = 100000.0;
        int opcion;

        do {
            mostrarMenu();
            opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    extraerDinero(scanner, saldo, movimientos);
                    break;
                case 2:
                    depositarDinero(scanner, saldo, movimientos);
                    break;
                case 3:
                    consultarSaldo(saldo, movimientos);
                    break;
                case 4:
                    verUltimosMovimientos(movimientos);
                    break;
                case 5:
                    System.out.println("\nMuchas gracias. ¡Hasta luego!");
                    break;
                default:
                    System.out.println("\nOpción no válida. Elige una opción:");
                    break;
            }

            System.out.println();
        } while (opcion != 5);

        scanner.close();
    }

    private static void mostrarMenu() {
        System.out.println("1. EXTRAER");
        System.out.println("2. DEPOSITAR");
        System.out.println("3. CONSULTAR SALDO");
        System.out.println("4. VER ÚLTIMOS MOVIMIENTOS");
        System.out.println("5. SALIR");
        System.out.print("Elige una opción: ");
    }

    private static void extraerDinero(Scanner scanner, double saldo, StringBuilder movimientos) {
        System.out.print("\nIngrese la cantidad a extraer: $");
        double cantidad = scanner.nextDouble();

        if (cantidad <= 0) {
            System.out.println("Error: Cantidad no válida.");
        } else if (cantidad > saldo) {
            System.out.println("Error: Saldo insuficiente.");
        } else {
            saldo -= cantidad;
            movimientos.append("- Extracción: $").append(cantidad).append("\n");
            System.out.println("Operación exitosa. Saldo actual: $" + saldo);
        }
    }

    private static void depositarDinero(Scanner scanner, double saldo, StringBuilder movimientos) {
        System.out.print("\nIngrese la cantidad a depositar: $");
        double cantidad = scanner.nextDouble();

        if (cantidad <= 0) {
            System.out.println("Error: Cantidad no válida.");
        } else {
            saldo += cantidad;
            movimientos.append("- Depósito: $").append(cantidad).append("\n");
            System.out.println("Operación exitosa. Saldo actual: $" + saldo);
        }
    }

    private static void consultarSaldo(double saldo, StringBuilder movimientos) {
        System.out.println("\nSaldo actual: $" + saldo);
        movimientos.append("- Consulta saldo: $").append(saldo).append("\n");
    }

    private static void verUltimosMovimientos(StringBuilder movimientos) {
        if (movimientos.length() > 0) {
            System.out.println("\nÚltimos movimientos:");
            System.out.print(movimientos);
        } else {
            System.out.println("\nNo se realizaron operaciones.");
        }
    }
}
