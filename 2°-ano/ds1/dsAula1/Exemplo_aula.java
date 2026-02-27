package dsAula1;

public class Exemplo_aula {

	public static void main(String[] args) {
		int [][] m = new int[4][4];
		int numero = 1;
		
		// atribuição de elemento na matriz
		for(int i=0;i<4;i++) { // linha
			for(int j=0;j<4;j++) {
				m[i][j]= numero;
				numero++;
			}
			
		}
		
		
		// exibição dos valores
		for(int i=0;i<4;i++) {
			for(int j=0;j<4;j++) {
				System.out.print(m[i][j]+" ");
			}
			System.out.println();
		}

	}

}
