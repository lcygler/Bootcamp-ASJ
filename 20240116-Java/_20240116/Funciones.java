package _20240116;

public class Funciones {
	public static void main(String[] args) {
		saludar();
		System.out.println(generarSaludo("Leandro"));
	}
	
	/* Funciones
	 * modificador [static] tipo_retorno nombre(tipo parametro) {
	 * 	return valor;
	 * }
	 */
	
	public static void saludar() {
		System.out.println("Hola Mundo!");
	}
	
	public static String generarSaludo(String nombre) {
		return "Hola " + nombre + "!";
	}
}
