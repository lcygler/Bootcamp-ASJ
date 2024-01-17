package _20240117;

public class Clases {

	public static void main(String[] args) {

		Automovil auto1 = new Automovil();
		auto1.mostrarDatos();
		System.out.println();
		
		Automovil auto2 = new Automovil("Peugeot", 2024);
		auto2.mostrarDatos();
		System.out.println();
		
		auto2.setMarca("Ferrari");
		System.out.println(auto2.getMarca());
		System.out.println(auto2.toString());
		
		// Herencia
		System.out.println("\nHerencia:");
		Camion camion1 = new Camion();
		System.out.println(camion1.toString());
		System.out.println();
		
		Camion camion2 = new Camion("Volvo", 2023, 1550.0);
		System.out.println(camion2.toString());
	}

}
