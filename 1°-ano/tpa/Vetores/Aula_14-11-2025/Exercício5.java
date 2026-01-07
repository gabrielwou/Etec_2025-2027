package aula;
import java.util.*;
public class aula2 {
	public static void main(String args[]) {
		Scanner ler = new Scanner(System.in);
		int i,k;
		int a[] = { 2, 45, 67, 30, 12, 69, 23, 29, 7, 89,};

	    // atividade //
		for (i=0;i<10;i++) {
			System.out.print(a[i]+" tem ");
			for(k=1;k<=a[i];k++) {
				if(a[i]%k==0) {
					System.out.print(k+", ");
				}
			}
			System.out.print("como divisores ");
			System.out.println();
		}

	    
	}

}
