
public class Fatorial {
	public void matematicaFatorial(int numero) {
		int resultado = numero;
		for(int i = 1; i < numero; i++) {
			resultado = resultado*(numero-i);
		}
		System.out.println(resultado);
	}
	
}
