
public class Exercício9 {

	public static void main(String[] args) {
		int c[],i;
		int a[] = { 2, 3, 5, 6, 7, 10, 16, 4, 12, 13};
		int b[] = { 2, 3, 5, 8, 9, 10, 16, 1, 12, 15};
        c = new int[10];
        
        System.out.print("C ="+"[");
		for(i=0; i<10; i++) {
			if(a[i] == b[i]) {
			c[i] = a[i];
			System.out.print(+c[i]+",");	
			}
		}
		System.out.println("]");

	}

}
