
public class Exercício15 {

	public static void main(String[] args) {
		int c[],i;
		int a[] = { 3, 4, 7, 8, 11, 35, 56, 12, 9, 12};
		int b[] = { 2, 5, 7, 10, 11, 45, 23, 6, 9, 11};
		c = new int[10];
		
		System.out.print("C ="+"[");
		for(i=0; i<10; i++) {
			if(a[i]>b[i]) {
				c[i] = 1;
			} if(a[i]==b[i]) {
				c[i] = 0;
			} if(a[i]<b[i]) {
				c[i] = -1;
			}
			System.out.print(c[i]+",");
		}
		System.out.print("]");
	}

}
