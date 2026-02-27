package dsAula1;

public class Exercicio2 {

	public static void main(String[] args) {
		int [][] m = new int[5][5];
		int k = 0;
		int a = 1;
		System.out.print(a + " + ");
		for(int i=0;i<5;i++) {
			for(int j=0;j<5;j++) {
				m[i][j]= a;
				a++;
				if(a != 26) {
					System.out.print(a + " + ");
				}else {
					System.out.print(a);
				}
			}
		}
		for(int i=0;i<5;i++) {
			for(int j=0;j<5;j++) {
				k = k + m[i][j];
			}
		}
		System.out.print(" = ");
		System.out.println(k);

	}

}
