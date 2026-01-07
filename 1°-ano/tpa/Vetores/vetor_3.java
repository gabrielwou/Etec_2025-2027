package prjVetor;
import java.util.*;
public class aula_vetor3 {

	public static void main(String[] args) {
		Scanner ler = new Scanner(System.in);
		final int TAM = 10;

		int a[],b[],i,k;
		a = new int[TAM];
		b = new int[TAM];
		
		//leitura do vetor a//
		for(i=0; i<TAM; i++) {
			System.out.println("Digite o "+(i+1)+" valor do vetor A");
			a[i] = ler.nextInt();
			
		}
		//calculo reverso do vetor b//
		i = TAM - 1;
		System.out.print("b {");
		for(k=0; k<TAM; k++) {
			b[k] = a[i];
			i = i-1;
			
			System.out.print(b[k]+" ");
		}
		System.out.print("}\n");
		
		//apresentação do vetor a//
		System.out.print("a {");
		for(i = 0; i<TAM; i++) {
			System.out.print(a[i]+" ");
		}
		System.out.print("}");
	}

}
