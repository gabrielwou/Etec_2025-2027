package aula;
import java.util.*;
public class aula2 {
	public static void main(String args[]) {
		Scanner ler = new Scanner(System.in);
		int a[],b[],i,k;
		final int TAM = 10;
		a = new int[TAM];
		b = new int[TAM];
		k = 0;
		par = 0;
		impar = 0; 
		// lendo vetor //
		
	    for (i=0;i<TAM;i++){
	        System.out.println("Digite o " + (i+1)+" valor do vetor a");
	        a[i] = ler.nextInt();
	    }
		
	    // atividade //

	    for (i=0;i<TAM;i++) {
	    	if(a[i]%2==0) {
	    		b[k] = a[i];
	    		k++;
	    	}
	    	
	    }
	    for(i=0;i<TAM;i++) {
	    	if(a[i]%2!=0) {
	    		b[k] = a[i];
	    		k++;
	    	}
	    }
	    
	    System.out.print("vetor a: "+" [");
	    for (i=0;i<TAM;i++) {
	    	System.out.print(a[i]+", " );
	    }
	    System.out.println("]");
	    System.out.println();
	    System.out.print("vetor b: "+" [");
	    for (k=0;k<TAM;k++) {
	    	System.out.print(b[k]+", " );
	    }
		System.out.print("]");
	}

}
