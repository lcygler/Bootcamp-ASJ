package _20240117.ejercicios.ej05;

public class Main {

	public static void main(String[] args) {
		// Crear superhéroes
		Superheroe heman = new Superheroe("He-Man");
		heman.setDescripcion("Es el guerrero elegido para proteger los secretos del Castillo Grayskull de las fuerzas del mal, siendo conocido como el hombre más poderoso del universo.");
		
		Superheroe superhijitus = new Superheroe("Superhijitus");
		superhijitus.setCapa(true);
		superhijitus.setDescripcion("Este tierno personaje vivía en las afueras de Trulalá, junto a su fiel perro Pichichus.");

		// Crear dimensiones
		Dimension dimensionHijitus = new Dimension(14, 6, 5);
		Dimension dimensionHeman = new Dimension(25, 15, 8);

		// Crear figuras
		Figura figuraHijitus = new Figura("HIJ123", 14750, superhijitus, dimensionHijitus);
		Figura figuraHeman = new Figura("HEM456", 3499, heman, dimensionHeman);

		// Crear colección
		Coleccion coleccion = new Coleccion("Superhéroes");

		// Agregar figuras a la colección
		coleccion.agregarFigura(figuraHijitus);
		coleccion.agregarFigura(figuraHeman);
		coleccion.imprimirColeccion();
		
		System.out.println("\nSubiendo precio de He-Man...");
		figuraHeman.subirPrecio(3000);
		coleccion.imprimirColeccion();

		System.out.println("\nLos superhéroes con capa son:");
		System.out.println(coleccion.conCapa());

		System.out.println("\nLa figura más valiosa de la colección es:");
		System.out.println(coleccion.masValioso());

		System.out.print("\nEl volumen total de la colección es: ");
		System.out.println(coleccion.getVolumenColeccion() + " cm³");

		System.out.print("\nEl valor total de la colección es: ");
		System.out.println("$" + coleccion.getValorColeccion());

	}

}
