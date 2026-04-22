package academia;
import java.util.*;
public class Aplicacao {

	public static void main(String[] args) {
		Scanner ler = new Scanner(System.in);
		Aluno aluno = new Aluno();
		Instrutor instrutor = new Instrutor();
		Instrutor instrutor2 = new Instrutor();
		Plano plano = new Plano();
		int opcaoInstrutor,opcaoPlano;
		String data;
		
		//Criando aluno
		aluno.setNome("Pedro Silva Oliveira");
		aluno.setIdade(35);
		aluno.setGenero("masculino");
		aluno.setCpf("402.892.321-11");
		aluno.setCodigoAluno(177);
		
		//Criando instrutores
		instrutor.setNome("Rafaela Santos");
		instrutor.setIdade(27);
		instrutor.setGenero("feminino");
		instrutor.setCpf("131.176.111-32");
		instrutor.setCodigo(1);
		instrutor.setContrato("739473743-43");
		
		instrutor2.setNome("Renato Cariani");
		instrutor2.setIdade(49);
		instrutor2.setGenero("Masculino");
		instrutor2.setCpf("789.556.213-44");
		instrutor2.setCodigo(2);
		instrutor2.setContrato("574834838-83");
		
		
		//Matricula
		System.out.println(" Ol�! Qual instrutor voc� deseja? (1 ou 2)");
		System.out.println("1- Rafaela Santos");
		System.out.println("2- Renato Cariani");
		opcaoInstrutor = ler.nextInt();
		
		
		System.out.println("Insira a data de hoje (com as barras '/'): ");
		data = ler.next();
		
		System.out.println("Escolha um plano(1, 2 ou 3): ");
		System.out.println("1 - Anual: 230.00 R$");
		System.out.println("2 - Trimestral: 89.00 R$");
		System.out.println("3 - Mensal: 37.00 R$");
		opcaoPlano = ler.nextInt();
		
		
		if(opcaoInstrutor == 1) {
			System.out.println("Instrutor Escolhido: "+instrutor.getNome());
		} else if(opcaoInstrutor == 2) {
			System.out.println("Instrutor Escolhido: "+instrutor2.getNome());
		} else {
			System.out.println("Apenas números '1' ou '2' ");
		}
		System.out.println("Data de inscrição: "+ data);
		if(opcaoPlano == 1) {
			System.out.println("Plano selecionado: Anual - R$230.00");
		} else if(opcaoPlano == 2) {
			System.out.println("Plano selecionado: Trimestral - R$89.00");
		} else if(opcaoPlano == 3) {
			System.out.println("Plano selecionado: Mensal - R$37.00");
		} else {
			System.out.println("Você não selecionou nenhuma das opções de planos disponiveis");
		}
		System.out.println("Nome do aluno: "+aluno.getNome());

	}

}