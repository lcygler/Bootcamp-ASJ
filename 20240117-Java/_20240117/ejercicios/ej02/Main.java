package _20240117.ejercicios.ej02;

public class Main {

	public static void main(String[] args) {
		Cuenta cuenta1 = new Cuenta("Juan");
		Cuenta cuenta2 = new Cuenta("Rodrigo", 500);

		System.out.println("Cuenta 1:");
		System.out.println(cuenta1.toString());

		System.out.println("\nCuenta 2:");
		System.out.println(cuenta2.toString());

		System.out.println("\nIngresando dinero...");
		cuenta1.ingresar(10000);
		System.out.println(cuenta1.toString());

		System.out.println("\nRetirando dinero...");
		cuenta1.retirar(5000);
		System.out.println(cuenta1.toString());

		System.out.println("\nRetirando dinero...");
		cuenta1.retirar(10000);
		System.out.println(cuenta1.toString());
	}

}
