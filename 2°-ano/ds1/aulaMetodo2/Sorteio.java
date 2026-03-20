import java.util.*;
public class Sorteio {
	public void leitor(int numero1, int numero2) {
		Scanner ler = new Scanner(System.in);
		
		System.out.println("\n"+"Digite seu 1° numero: ");
		numero1 = ler.nextInt();
		System.out.println("\n"+"Digite seu 2° numero: ");
		numero2 = ler.nextInt();
		
		
	}
	
	public void gerador() {
		Random gerador = new Random();
		int numero3 = gerador.nextInt(11);
		int numero4 = gerador.nextInt(11); 
		System.out.println(numero3);
	}
	
}
