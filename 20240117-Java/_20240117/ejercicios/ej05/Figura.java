package _20240117.ejercicios.ej05;

public class Figura {

	private String codigo;
	private double precio;
	private Superheroe superheroe;
	private Dimension dimension;

	public Figura(String codigo, double precio, Superheroe superheroe, Dimension dimension) {
		this.codigo = codigo;
		this.precio = precio;
		this.superheroe = superheroe;
		this.dimension = dimension;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public Superheroe getSuperheroe() {
		return superheroe;
	}

	public void setSuperheroe(Superheroe superheroe) {
		this.superheroe = superheroe;
	}

	public Dimension getDimension() {
		return dimension;
	}

	public void setDimension(Dimension dimension) {
		this.dimension = dimension;
	}

	public void subirPrecio(double cantidad) {
		if (cantidad > 0) {
			this.precio += cantidad;
		}
	}

	@Override
	public String toString() {
		return "Figura [codigo=" + codigo + ", precio=" + precio + ", superheroe=" + superheroe + ", dimension="
				+ dimension + "]";
	}

}
