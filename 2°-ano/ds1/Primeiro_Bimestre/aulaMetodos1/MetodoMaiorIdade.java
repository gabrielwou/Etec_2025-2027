import java.util.*;

public class MetodoMaiorIdade {
	
	public void verificaIdade() {
		Scanner ler = new Scanner(System.in);
		System.out.println("Digite sua idade");
		int idade = ler.nextInt();
		
		if(idade > 17) {
			System.out.println("Maior de idade");
		}else {
			System.out.println("Menor de idade");
		}
	}

}
