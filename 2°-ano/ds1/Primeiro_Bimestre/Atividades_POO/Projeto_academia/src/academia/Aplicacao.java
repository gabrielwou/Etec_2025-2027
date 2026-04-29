package academia;
import java.util.*;
public class Aplicacao {

	public static void main(String[] args) {
		Scanner ler = new Scanner(System.in);
		Aluno aluno = new Aluno();
		Instrutor instrutor = new Instrutor();
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
		instrutor.setCodigo(342);
		instrutor.setContrato("739473743-43");
		
		instrutor.setNome("Renato Cariani");
		instrutor.setIdade(49);
		instrutor.setGenero("Masculino");
		instrutor.setCpf("789.556.213-44");
		instrutor.setCodigo(552);
		instrutor.setContrato("574834838-83");
		
		
		//Matricula
		System.out.println(" Olá! Qual instrutor você deseja? ");
		System.out.println("1- Rafaela Santos");
		System.out.println("2- Renato Cariani");
		opcaoInstrutor = ler.nextInt();
		
		System.out.println("Insira a data de hoje: ");
		data = ler.next();
		
		System.out.println("Escolha um plano: ");
		System.out.println("1 - Anual: 230.00 R$");
		System.out.println("2 - Trimestral: 89.00 R$");
		System.out.println("3 - Mensal: 37.00 R$");
		opcaoPlano = ler.nextInt();
		
		
		if(opcaoInstrutor > 1) {
			System.out.println("Instrutor Escolhido: "+instrutor.getNome());
		}
		
		

	}

}
