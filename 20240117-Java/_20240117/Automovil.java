package _20240117;

public class Automovil {

	// Atributos
	private String marca;
	private int anio;
	private String color;

	// Constructor
	public Automovil() {
		System.out.println("Creando instancia de Clase Automovil vacía...");
	}

	// Constructor parametrizado (sobrecarga)
	public Automovil(String marca, int anio) {
		this.marca = marca;
		this.anio = anio;
		this.color = "-";
		System.out.println("Creando instancia de Clase Automovil...");
	}

	// Getters y Setters
	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public int getAnio() {
		return anio;
	}

	public void setAnio(int anio) {
		this.anio = anio;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	// Métodos
	// modificador retorno nombre(param) {}
	public void mostrarDatos() {
		System.out.println("Marca=" + this.marca + ", Año=" + this.anio + ", Color=" + this.color);
	}

	@Override
	public String toString() {
		return "Automovil [marca=" + marca + ", anio=" + anio + ", color=" + color + "]";
	}
}
