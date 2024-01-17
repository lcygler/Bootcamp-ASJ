package _20240117;

import java.util.ArrayList;
import java.util.Iterator;

public class ArrayLists {
	public static void main(String[] args) {
		// Declarar ArrayList
		// ArrayList<tipo> nombre = new ArrayList<tipo>();
		ArrayList<String> miLista = new ArrayList<>();

		// Agregar un elemento
		miLista.add("Rojo");
		miLista.add("Azul");
		miLista.add("Verde");

		// Recorrer la lista
		for (int i = 0; i < miLista.size(); i++) {
			// Imprimir cada elemento
			System.out.println(miLista.get(i));
		}

		miLista.add("Negro");
		miLista.add("Blanco");
		miLista.add(3, "Amarillo");

		System.out.println();

		for (String elemento : miLista) {
			System.out.println(elemento);
		}

		// Eliminar un elemento
		miLista.remove(5); // Eliminar "Blanco"
		imprimir(miLista);

		miLista.remove("Verde");
		imprimir(miLista);

		// Devolver el índice de un elemento
		int index = miLista.indexOf("Amarillo");
		System.out.println("\nindex: " + index);

		// Devolver el último índice de un elemento
		int lastIndex = miLista.lastIndexOf("Amarillo");
		System.out.println("\nlastIndex: " + lastIndex);

		// Eliminar todos los elementos
		// miLista.clear();
		imprimir(miLista);

		// Verificar si la lista está vacía
		boolean isEmpty = miLista.isEmpty();

		if (isEmpty) {
			System.out.println("\nLa lista está vacía");
		} else {
			System.out.println("\nLa lista NO está vacía");
		}

		// Verificar si la lista contiene un elemento
		String colorBuscado = "Rojo";

		if (miLista.contains(colorBuscado)) {
			System.out.println("\nLa lista contiene el color: " + colorBuscado);
		} else {
			System.out.println("\nLa lista NO contiene el color: " + colorBuscado);
		}

		System.out.println("\nIterando:");

		// Recorrer la lista usando un iterador
		// Iterator<tipo> nombre = lista.iterator();
		Iterator<String> miIterador = miLista.iterator();

		while (miIterador.hasNext()) {
			String elemento = miIterador.next();
			System.out.print(elemento + " ");
		}
	}

	private static void imprimir(ArrayList<String> lista) {
		System.out.println();

		for (String elemento : lista) {
			System.out.println(elemento);
		}
	}
}
