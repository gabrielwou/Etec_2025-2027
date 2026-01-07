import java.util.Scanner;

public class Exercício11 {
	
	public static void main(String[] args) {
		Scanner in  = new Scanner (System.in);
		final int TAM = 3;
		int a[],j,i,k=0;
		a = new int[TAM];
		
		for(i=0; i<TAM; i++) {
			System.out.println("digite o "+(i+1)+"° valor do vetor A");
			a[i] = in.nextInt();
		}
		System.out.println("Digite o valor que deseja buscar");
		j  = in.nextInt();
		
		for(i=0; i<TAM; i++) {
			if(j == a[i]) {
				k = 1;
		    }
		}
		if(k == 1) {
			System.out.println("este valor está armazenado no vetor.");
		} else {
			System.out.println("este valor não está armazenado no vetor.");
		}
		
	}
}
