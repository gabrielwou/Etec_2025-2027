package clinica;
import java.util.*;


public class Aplicacao {

	public static void main(String[] args) {
		Scanner ler = new Scanner(System.in);
		String dataConsulta,horaConsulta;
		Paciente paciente = new Paciente();
		Medico medico = new Medico();
		Consulta consulta = new Consulta();
		
		
		consulta.setData("17/04/26");
		consulta.setHora("19:30");
		
		//Paciente 
		paciente.setNome("Gabriel");
		paciente.setIdade(16);
		paciente.setCpf("123.456.789.11");
		paciente.setGenero("masculino");
		paciente.setEndereco("Rua da ábobora, 156");
		paciente.setCodigo(2677);
		paciente.setDescricao("tosse forte");
		
		//Medico
		medico.setNome("Dr. Ricardo Arantes");
        medico.setIdade(45);
        medico.setGenero("Masculino");
        medico.setCpf("123.456.789-00");
        medico.setEspecialidade("Cardiologia"); 
        medico.setCrm("CRM/SP 123456");
        
		//Agendando consulta
		System.out.println("Insira a data da consulta");
		dataConsulta = ler.next();
		System.out.println("Insira a hora da consulta");
		horaConsulta = ler.next();
		consulta.setData(dataConsulta);
		consulta.setHora(horaConsulta);
		consulta.setMedicoConsulta(medico.getNome());
		consulta.setPacienteConsulta(paciente.getNome());
		
		
		//Consulta
		System.out.println("Data da consulta: "+consulta.getData());
		System.out.println("Horarío: "+consulta.getHora());
		System.out.println("Médico: "+consulta.getMedicoConsulta());
		System.out.println("Paciente: "+consulta.getPacienteConsulta());
		
		
	}

}
