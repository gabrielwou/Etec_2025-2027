
package aulaDs;

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
		int[] numerosUsuario = bingo.leitor();
		int[] numerosSorteados = bingo.sorteador();
		boolean resultado = bingo.validar(numerosUsuario[0], numerosUsuario[1], numerosSorteados[0], numerosSorteados[1]);
		System.out.println(resultado);
		/*
		//Ex4
		Fatorial f = new Fatorial();
		System.out.println("\n"+"Digite um numero: ");
		int numero = ler.nextInt();
		f.matematicaFatorial(numero);
		*/
		
	}

}