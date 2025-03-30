import java.util.*;
public class inserccion{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Ingrese el tamaño del arreglo: ");
        int n = sc.nextInt();

        int arreglo[] = new int[n];
        Random randomNumbers = new Random();

        for (int i = 0; i < n; i++) {
            arreglo[i] = randomNumbers.nextInt(100000); 
        }

        System.out.println("Arreglo desordenado: ");
        for (int i = 0; i < arreglo.length; i++) {
            System.out.print(arreglo[i] + " ");
        }

        long inicioTiempo = System.nanoTime();

        for (int i = 1; i < arreglo.length; i++) {
            int elem = arreglo[i];
            int j = i - 1;
            while (j >= 0 && arreglo[j] < elem) {
                arreglo[j + 1] = arreglo[j];
                j--;

            }
            arreglo[j+1] = elem;
        }

        long finTiempo = System.nanoTime();
        long tiempoTranscurrido = (long) ((finTiempo - inicioTiempo) / 1_000_000_000.0);

        System.out.println("\nArreglo ordenado al reves: ");
        for (int i = 0; i < arreglo.length; i++) {
            System.out.print(arreglo[i] + " ");
        }

        for (int i = 0; i < arreglo.length; i++) {
            int elem = arreglo[i];
            int j = i - 1;
            while (j >= 0 && arreglo[j] > elem) {
                arreglo[j + 1] = arreglo[j];
                j--;

            }
            arreglo[j+1] = elem;
        }
        
        System.out.println("\nArreglo ordenado: ");
        for (int i = 0; i < arreglo.length; i++) {
            System.out.print(arreglo[i] + " ");
        }

        System.out.println("\nTiempo de ejecución: " + tiempoTranscurrido + " segundos");
            
    }
}
