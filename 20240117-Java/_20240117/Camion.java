package _20240117;

public class Camion extends Automovil {

	private double cargaMaxima;

	public Camion() {
		super(); // Llamo al constructor vacío de la clase padre
		System.out.println("Creando instancia de Clase Camion vacía...");
	}

	public Camion(String marca, int anio, double carga) {
		super(marca, anio); // Llamo al constructor con parámetros de la clase padre
		this.cargaMaxima = carga;
		System.out.println("Creando instancia de Clase Camion...");
	}

	public double getCargaMaxima() {
		return cargaMaxima;
	}

	public void setCargaMaxima(double cargaMaxima) {
		this.cargaMaxima = cargaMaxima;
	}

	public String getMarca() {
		return "Prueba";
	}
	
	@Override
	public String toString() {
		return "Camion [cargaMaxima=" + cargaMaxima + ", getMarca()=" + super.getMarca() + ", getAnio()=" + getAnio()
				+ ", getColor()=" + getColor() + "]";
	}
}
