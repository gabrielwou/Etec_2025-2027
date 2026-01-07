package prjVetor;

import java.util.*;

public class aula_vetor2 {

	public static void main(String[] args) {
		Scanner ler = new Scanner(System.in);
		final int TAM = 10;
		int a[],b[],c[],i;
		a = new int[TAM];
		b = new int[TAM];
		c = new int[TAM];
		
		//leitura do vetor a//
		for(i=0; i<TAM; i++) {
			System.out.println("Digite o "+(i+1)+" valor do vetor A");
			a[i] = ler.nextInt();
		}
		
		//leitura do vetor b//
		for(i=0; i<TAM; i++) {
			System.out.println("Digite o "+(i+1)+" valor do vetor B");
			b[i] = ler.nextInt();
			//somando//
			c[i] = a[i]+b[i];
		}
		
		//apresentando vetor c//
		System.out.print("\nC = ");
		for(i=0; i<TAM; i++) {
			System.out.print(c[i]+" ");
			
	}

}
