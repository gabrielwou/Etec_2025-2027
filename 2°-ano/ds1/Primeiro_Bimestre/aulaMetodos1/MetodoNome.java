
public class MetodoNome {
	
	public String verificaNome(String nome) {
	
		if(nome.length() < 3) {
			System.out.println("Nome inválido");
		}else {
			System.out.println("Nome válido");
		}
		return nome;
	}

}
