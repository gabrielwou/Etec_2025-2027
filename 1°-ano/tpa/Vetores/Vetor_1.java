package prjVetor;
import java.util.*;
public class aula_vetor1 {

	public static void main(String[] args) {
		Scanner ler = new Scanner(System.in);
		final int TAM = 10;
		int a[],b[],i,k;
		a = new int[TAM];
		b = new int[TAM];
		
		//lendo vetor a//
		
		for(i=0; i<TAM; i++) {
			System.out.println("digite o "+(i+1)+"° valor do vetor a");
			a[i] = ler.nextInt();
		}
		
		//calculando vetor b//

		for(i=0; i<TAM; i++) {
			b[i] = a[i]*a[i];
			System.out.print(b[i]+", ");
			
		}
		

	}

}
