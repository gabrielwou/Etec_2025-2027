package prjVetor;

import java.util.Scanner;

public class aula_vetor4 {

	public static void main(String[] args) {
		Scanner ler = new Scanner(System.in);
		final int TAM = 10;
		int a[],b[],i,Soma,Media;
		a = new int[TAM];
		Soma = 0;
		//lendo vetor a//	
		for(i=0; i<TAM; i++) {
			System.out.println("digite o "+(i+1)+"° valor do vetor a");
			a[i] = ler.nextInt();
		}
		for(i=0; i<TAM; i++) {
			Soma = a[i] + Soma;
		}
		Media = Soma/TAM;
		System.out.println(Media);

	}

}

