package _20240115;

public class Arrays {

	public static void main(String[] args) {
		// Array unidimensional (1xN)
		// tipo nombre[] = valor;
		// tipo[] nombre = valor;

		int datos[] = new int[5];
		int[] datos1 = new int[8];

		byte[] arr = { 1, 2, 3, 4 };

		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}

		System.out.println("Matrices");
		// Array multidimensional (NxM, NxMxZ)
		// int[][] matriz = new int[3][2];
		int[][] matriz = { { 1, 2 }, { 3, 4 }, { 5, 6 } };

		/*
		 * 1 2
		 * 3 4
		 * 5 6
		 */

		// Recorrer filas
		for (int i = 0; i < matriz.length; i++) {
			// Recorrer columnas
			for (int j = 0; j < matriz[i].length; j++) {
				System.out.print(matriz[i][j] + " ");
			}
			System.out.println();
		}

	}

}
