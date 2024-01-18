package _20240117.ejercicios.ej05;

import java.util.ArrayList;

public class Coleccion {

	private String nombre;
	private ArrayList<Figura> figuras;

	public Coleccion(String nombre) {
		this.nombre = nombre;
		this.figuras = new ArrayList<>();
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void agregarFigura(Figura figura) {
		this.figuras.add(figura);
	}

	public void subirPrecio(double cantidad, String id) {
		boolean encontrada = false;
		int i = 0;
		Figura figura;

		while (i < this.figuras.size() && !encontrada) {
			figura = this.figuras.get(i);

			if (figura.getCodigo().equals(id)) {
				figura.subirPrecio(cantidad);
				encontrada = true;
			} else {
				i++;
			}
		}
	}

	public void imprimirColeccion() {
		System.out.println("Colección: " + this.nombre);

		for (Figura figura : figuras) {
			System.out.println(figura);
		}
	}

	public String conCapa() {
		StringBuilder superheroes = new StringBuilder();

		for (Figura figura : figuras) {
			if (figura.getSuperheroe().hasCapa()) {
				superheroes.append(figura).append("\n");
			}
		}

		if (superheroes.length() > 0) {
			superheroes.setLength(superheroes.length() - 1); // Remover último caracter ("\n")
		}

		return superheroes.toString();
	}

	public void imprimirConCapa() {
		for (Figura figura : figuras) {
			if (figura.getSuperheroe().hasCapa()) {
				System.out.println(figura);
			}
		}
	}

	public Figura masValioso() {
		Figura figuraMasValiosa = null;
		double mayorPrecio = 0;

		for (Figura figura : figuras) {
			if (figura.getPrecio() > mayorPrecio) {
				mayorPrecio = figura.getPrecio();
				figuraMasValiosa = figura;
			}
		}

		return figuraMasValiosa;
	}

	public double getValorColeccion() {
		double valor = 0;

		for (Figura figura : figuras) {
			valor += figura.getPrecio();
		}

		return valor;
	}

	public double getVolumenColeccion() {
		double volumen = 0;

		if (!figuras.isEmpty()) {
			volumen += 200;
		}

		for (Figura figura : figuras) {
			volumen += figura.getDimension().getVolumen();
		}

		return volumen;
	}

	@Override
	public String toString() {
		return "Coleccion [nombre=" + nombre + ", figuras=" + figuras + "]";
	}

}
