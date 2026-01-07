
public class Exercício2 {

	public static void main(String[] args) {
		int n,resultado,i;
		int a[] = { 5, 4, 3, 6 , 7};
		for(i=0; i<5; i++) {
			for(n=1; n<=10; n++) {
				resultado= a[i]*n;
				System.out.println(a[i]+"x"+n+"="+resultado);
			}
		}
				
	}

}
