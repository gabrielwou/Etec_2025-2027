
public class Aplicacao {

	public static void main(String[] args) {
		
		Pessoa pessoa = new Pessoa();
		
		//Atribuição dos valores
		pessoa.setNome("Gabriel");
		pessoa.setIdade(16);
		pessoa.setGenero("Masculino");
		pessoa.setEstadoCivil("Solteiro");
		pessoa.setEmail("gabsdev@gmail.com");
		pessoa.setCpf("495.326.912-05");
		pessoa.setPeso(51);

		//Exibindo valores
		System.out.println(pessoa.getNome());
		System.out.println(pessoa.getIdade());
		System.out.println(pessoa.getGenero());
		System.out.println(pessoa.getEstadoCivil());
		System.out.println(pessoa.getEmail());
		System.out.println(pessoa.getCpf());
		System.out.println(pessoa.getPeso());
	}

}
