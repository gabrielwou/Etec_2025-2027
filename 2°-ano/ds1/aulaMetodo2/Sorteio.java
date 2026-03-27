package aulaDs;

import java.util.*;
public class Sorteio {
	public int[] leitor() {
		Scanner ler = new Scanner(System.in);
		
		System.out.println("\n"+"Digite seu 1° numero: ");
		int numero1 = ler.nextInt();
		System.out.println("\n"+"Digite seu 2° numero: ");
		int numero2 = ler.nextInt();
		
		return new int[] {numero1, numero2};

	}
	
	public int[] sorteador() {
		Random gerador = new Random();
		int numero3 = gerador.nextInt(11);
		System.out.println("o primeiro número gerado foi "+numero3);
		int numero4 = gerador.nextInt(11); 
		System.out.println("o segundo número gerado foi "+numero4);
		
		return new int[] {numero3, numero4};
	}
	
	public boolean validar(int numero1, int numero2, int numero3, int numero4) {
		if(numero3 == numero1 || numero3 == numero2) {
			return true;
		}else if(numero4 == numero1 || numero4 == numero2) {
			return true;
		}else {
			return false;
		}
		
	}
	
}