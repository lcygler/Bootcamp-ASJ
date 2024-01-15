package _20240115;

public class Introduccion {

	public static void main(String[] args) {
		System.out.println("Hola Mundo!");

		// Tipos de datos
		byte byteValue = 127;
		short shortValue = 32767;
		int integerValue = 42;
		long longValue = 123456789L;
		float floatValue = 3.14f;
		double doubleValue = 2.71828;
		boolean booleanValue = true;
		char charValue = 'A';
		String stringValue = "Hola";

		// Rangos de valores
		System.out.println("\nTipo - Mínimo - Máximo");
		System.out.println("byte: Min=" + Byte.MIN_VALUE + " - Max=" + Byte.MAX_VALUE);
		System.out.println("short: Min=" + Short.MIN_VALUE + " - Max=" + Short.MAX_VALUE);
		System.out.println("int: Min=" + Integer.MIN_VALUE + " - Max=" + Integer.MAX_VALUE);
		System.out.println("long: Min=" + Long.MIN_VALUE + " - Max=" + Long.MAX_VALUE);
		System.out.println("float: Min=" + Float.MIN_VALUE + " - Max=" + Float.MAX_VALUE);
		System.out.println("double: Min=" + Double.MIN_VALUE + " - Max=" + Double.MAX_VALUE);

		// Casteo de datos
		System.out.print("\nByte casteado a Int: ");
		System.out.print((int) byteValue);
		
		System.out.print("\nInt casteado a Double: ");
		double doubleNumber = (double) integerValue;
		System.out.println(doubleNumber);
		
		System.out.print("Int casteado a Char: ");
		System.out.println((char) integerValue);
		
		// Arrays
		int[] myArray1;
		myArray1 = new int[] { 1, 2, 3 };

		int[] myArray2 = { 1, 2, 3 };

		int myArray3[]; // Menos usada
		
		/* Operadores
		 * Matemáticos: + - * / %
		 * Lógicos: && || !
		 * Comparación: < <= > >= == !=
		 */
		
		// Comparación de cadenas
		String palabra1 = "A";
		String palabra2 = "B";

		System.out.println(palabra1.compareTo(palabra2));
		System.out.println(palabra1.equals(palabra2));
		
		// Clase Math
		System.out.println(Math.PI);
		
		System.out.println(Math.pow(3, 2));
		System.out.println(Math.sqrt(9));
		
		System.out.println(Math.floor(Math.sqrt(25)));
		System.out.println(Math.ceil(Math.sqrt(25)));
		System.out.println(Math.round(Math.sqrt(25)));
	}

}
