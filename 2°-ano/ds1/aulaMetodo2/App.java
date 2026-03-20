import java.util.*;
public class App {

	public static void main(String[] args) {
		Scanner ler = new Scanner(System.in);
		/*
		//Ex1
		Menu exibir = new Menu();
		exibir.exibirMenu();
		
		
		//Ex2
		Saudacao bemvindo = new Saudacao();
		System.out.println("\n"+"Digite seu nome: ");
		String nome = ler.next();
		bemvindo.saudacaoPersonalizada(nome);
		*/
		//Ex3
		Sorteio bingo = new Sorteio();
		System.out.println("\n"+"Digite seu 1° numero: ");
		int numero1 = ler.nextInt();
		System.out.println("\n"+"Digite seu 2° numero: ");
		int numero2 = ler.nextInt();
		
		
		/*
		//Ex4
		Fatorial f = new Fatorial();
		System.out.println("\n"+"Digite um numero: ");
		int numero = ler.nextInt();
		f.matematicaFatorial(numero);
		*/
		
	}

}
