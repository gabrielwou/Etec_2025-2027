import java.util.*;

public class MetodoParametros {
	Scanner ler = new Scanner(System.in);
	public String nomePessoa() {
		System.out.println("insira seu nome ");
		String nome = ler.next();
		return nome.toUpperCase();
	}
	
	public int idadePessoa() {
		System.out.println("insira sua idade ");
		int idade = ler.nextInt();
		return idade;
	}
	
	public String emailPessoa() {
		System.out.println("insira seu Email ");
		String email = ler.next();
		return email.toLowerCase();
	}
	
	public double pesoPessoa() {
		System.out.println("insira seu peso ");
		double peso = ler.nextDouble();
		return Math.floor(peso * 100.0) / 100.0;
	}
}
