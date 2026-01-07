package aula;
import java.util.*;
public class aula2 {
	public static void main(String args[]) {
		Scanner ler = new Scanner(System.in);
		int i,k,n,m,j;
		int a[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
		int vetinho = 0;
		n=2;
		m = 1;
	 
	    // atividade //
		for(i=0;i<11;i++) {
			m = m*n;
		}
	    for(i=10;i!=-1;i--) {
	    	m = m/2;
	    	a[i] = m;
	    }
	    j = 10;
	    for(i=0;i<11;i++) {
	    	if(a[i]>a[j]) {
	    		vetinho = a[i];
	    		a[i] = a[j];
	    		j--;
	    	}
	    	System.out.print(a[i]+" ");
	    }
	    

	    
	}

}
