import java.util.*;

public class MetodoCep {
	
	public void converterCep() {
		Scanner ler = new Scanner(System.in);
		System.out.println("Digite seu cep");
		String cep = ler.next();
		
		System.out.println(cep.substring(0,5) + "-" + cep.substring(5,8));
		}
}
