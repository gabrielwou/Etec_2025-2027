
public class Exercício4 {
	 
	public static void main(String[] args) {
		
		int i,j;
		int a[] = { 10, 20, 17, 14, 23, 36, 40, 20, 11, 8 };
		
		for(i=0; i<10; i++) {
			System.out.println();
			System.out.print("["+a[i]+"]"+" pares : ");
			for(j=0; j<=a[i]; j=j+2) {
				System.out.print(j+" ");
			}
		}
		
		
	}
}
