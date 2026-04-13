package nsei;

import java.util.*;

public class Aplicacao {
	
	public static void main(String[]args) {
		Scanner ler = new Scanner(System.in);
		
		//instanciar um objeto
		Aluno a1 = new Aluno();
		
		System.out.println("Digite seu nome");
		a1.nome = ler.next();
		System.out.println("Digite sua idade");
		a1.idade = ler.nextInt();
		System.out.println("Digite seu cpf");
		a1.cpf = ler.next();
		System.out.println("Digite seu email");
		a1.email = ler.next();
		System.out.println("Digite seu telefone");
		a1.telefone = ler.next();
		
		System.out.println("Seus dados são: ");

		System.out.println("nome: "+a1.nome);
		System.out.println("idade: "+a1.idade);
		System.out.println("cpf: "+a1.cpf);
		System.out.println("email: "+a1.email);
		System.out.println("telefone: "+a1.telefone);
		
		
		ler.close();
	}

}
