package dsAula1;

public class exercicio5 {
	public static void main(String[] args) {
		int [][] m = new int[4][4];
		int a = 1;
		for(int i=0;i<4;i++) {
			for(int j=0;j<4;j++) {
				m[i][j]=a;
				a++;
			}

		}
		
		for(int i=0;i<4;i++) {
				System.out.println(m[i][(3-i)]);
		}
		
	}
}
